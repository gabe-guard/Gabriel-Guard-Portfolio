# Gabriel Guard Portfolio

Personal engineering portfolio built from semantic HTML, CSS, and vanilla JavaScript. The site uses the visual system and project browsing experience from [Alejandro Diaz's MIT-licensed portfolio](https://github.com/alejdiaz25/alejdiaz25.github.io), adapted with Gabriel's content and media.

## Run locally

```sh
npm install
npm run dev
```

Vite serves the site locally. `npm run build` creates a static build of the home page and project viewer.

Portfolio text is in `content.json`. Project records are generated from the retained source data in `src/data/projects.ts`:

```sh
npm run data:projects
```

Gabriel's project media is in `images/gabriel/`. Project gallery entries and video/CAD links come from the project source records. The styling and interactive project viewer are in `css/` and `js/`.

## Attribution

The site structure, CSS, and JavaScript were adapted from Alejandro Diaz's portfolio under the MIT License. See `LICENSE` for the license text. The self-hosted fonts retain their SIL Open Font License files beside the font assets. All Gabriel Guard portfolio copy and media remain Gabriel's.
