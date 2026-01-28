# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment variables

- **Copy and configure:** Duplicate `.env.example` to `.env.local` (or `.env`) and fill in your values.
- **Vite prefix:** All client-facing variables must start with `VITE_` (e.g. `VITE_EMAILJS_SERVICE_ID`).
- **EmailJS keys used:** `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
- **Security:** Never commit real secrets to the repository. Keep `.env.local` in your local `.gitignore`.

After creating your `.env.local`, restart the dev server so Vite picks up the changes.
