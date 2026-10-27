# Project rules

- Resolve imported `.asset.json` media to the pointer's URL in both project data and static-data export; treating pointers as image filenames breaks uploaded media.
- Keep project replacements synchronized in `src/data/projects.ts`, `projects.json`, and `public/projects.json`; the current static preview reads JSON while the React portfolio uses the typed source.