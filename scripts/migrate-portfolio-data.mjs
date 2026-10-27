import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const root = process.cwd();
const sourcePath = path.join(root, 'src/data/projects.ts');
let source = fs.readFileSync(sourcePath, 'utf8');
const imports = [...source.matchAll(/import\s+(\w+)\s+from\s+"@\/assets\/([^"]+)";?/g)];
const declarations = imports.map(([, name, file]) => {
  const value = file.endsWith('.asset.json')
    ? JSON.parse(fs.readFileSync(path.join(root, 'src/assets', file), 'utf8'))
    : `/images/gabriel/${path.basename(file)}`;
  return `const ${name} = ${JSON.stringify(value)};`;
}).join('\n');
source = source.replace(/import\s+type\s+React[^\n]*\n/, '');
source = source.replace(/import\s+[^\n]*\n/g, '');
source = source.replace(/export const projects: Project\[\] =/, 'const projects =');
source = source.replace(/export const getProject[^\n]+\n?/, '');
const js = ts.transpile(source + '\nconsole.log(JSON.stringify(projects));', { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None });
let output;
vm.runInNewContext(`${declarations}\n${js}`, { exports: {}, console: { log: (value) => { output = value; } } });
const projects = JSON.parse(output).map((p) => {
  const body = [p.summary, ...(p.details || []).map((x) => typeof x === 'string' ? x : x.text), p.feature?.body]
    .filter(Boolean).join('\n\n');
  const media = [...(p.gallery || []).map((x) => x.src), ...(p.processShots || []).map((x) => x.src), ...(p.cad || []).map((x) => x.src)];
  const awards = (p.highlights || []).map((val) => ({ key: 'Recognition', val }));
  return {
    id: p.slug,
    org: p.category === 'Robotics' ? 'FRC Team 6800 Valor' : p.category,
    title: p.title.replace(/\.$/, ''),
    subtitle: `${p.year} · ${p.role}`,
    description: body,
    specs: [{ key: 'Role', val: p.role }, { key: 'Year', val: p.year }, ...awards],
    software: p.skills || [],
    tags: [p.category, ...(p.skills || [])],
    preview: p.cover,
    models: [],
    gallery: media,
    wireframeThumbnail: p.cover,
    links: (p.links || []).filter((link) => link.href && !/^https?:\/\/onshape\.com\/?$/i.test(link.href)),
  };
});
const data = JSON.stringify({
  preview: { eyebrow: 'Selected work · Gabriel Guard', link: { href: 'projects.html' }, thumbs: projects.map((p) => ({ id: p.id, img: p.preview, alt: p.title })) },
  projects,
}, null, 2) + '\n';
fs.writeFileSync(path.join(root, 'projects.json'), data);
fs.writeFileSync(path.join(root, 'public/projects.json'), data);
