# Coolify Hello World

Minimal Next.js template to confirm that Coolify can build and serve your app. It just renders a single hero page so you can:

1. Push code, let Coolify run `npm run build + npm run start`.
2. Open the public URL on port `3000`.
3. See the “Everything deployed, nothing exploded.” hero to know the deployment succeeded.

## Local testing

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) while the dev server runs and you should see the same hero page that Coolify will serve in production.

## Deploy with Coolify

1. Create a new app in Coolify and point it to this repository or branch.
2. Set the build command to `npm run build` and the start command to `npm run start`.
3. The service listens on port `3000`, which is the default port Coolify exposes for Node apps, so no extra configuration is needed.
4. After the deploy finishes, click the generated URL and confirm the hero page loads without errors.

If you want extra health checks, add routes such as `/health` before promoting this app to staging.
