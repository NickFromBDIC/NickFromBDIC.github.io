# Yuan Liang — research website

Personal research website for Yuan Liang, a PhD researcher at University College Dublin working on radiomics and feature fusion for medical imaging.

Website: [nickfrombdic.github.io](https://nickfrombdic.github.io/).

This is a static website with no build step or third-party runtime dependencies.

## GitHub Pages

Publish the `main` branch from the repository root (`/`) in **Settings → Pages → Deploy from a branch**. The `.nojekyll` file tells GitHub Pages to serve the files directly.

This personal homepage is published from the `NickFromBDIC/NickFromBDIC.github.io` repository. All asset links are relative.

## Updating the site

- `index.html`: biography, research, publications, experience, education and contact details.
- `styles.css`: page layout, responsive styling and portrait animation.
- `portrait.js`: animation pause/resume and reduced-motion preference handling.
- `assets/`: portrait photographs, illustration and ML-Labs logo.

Changes pushed to `main` are published automatically once GitHub Pages is enabled. Email is the only published contact detail. The CV and phone number are intentionally excluded.

The portrait switches between the photograph and illustration, with a rotating firework effect. Visitors can pause it, and reduced-motion preferences are respected. The profile sidebar stays visible while scrolling on larger screens.
