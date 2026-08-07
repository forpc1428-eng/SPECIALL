# family-gallery-main -> Deploy to https://github.com/forpc1428-eng/SPECIALL

This repository contains a Vite + React project prepared to deploy to GitHub Pages.

Steps to upload and deploy to `https://github.com/forpc1428-eng/SPECIALL.git`:

1. Initialize git (if not already):

```bash
git init
git add .
git commit -m "Initial commit: add project"
```

2. Add the remote and push to `main` (replace `main` with your default branch if different):

```bash
git remote add origin https://github.com/forpc1428-eng/SPECIALL.git
git branch -M main
git push -u origin main
```

3. After pushing, GitHub Actions will run the workflow in `.github/workflows/deploy.yml`, build the app, and deploy the `dist` folder to GitHub Pages. The site will be available at `https://forpc1428-eng.github.io/SPECIALL` once the Pages deployment completes.

Notes:
- The workflow uses the built-in `GITHUB_TOKEN` so no extra secrets are required.
- If your repo uses a different default branch name, update the workflow trigger or push to that branch.
