const steps = [
  {
    title: "Deploy",
    body: "Push this branch and let Coolify run `npm run build`. The default Next.js port (3000) is predicted automatically.",
  },
  {
    title: "Verify",
    body: "Visit the public URL that Coolify prints in its dashboard to see this message and confirm the pipeline succeeded.",
  },
  {
    title: "Inspect",
    body: "Logs show `next start` running inside the container. A green health check and this loading hero means your service is ready.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
      <main className="w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800 p-10 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Coolify Hello World
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Everything deployed, nothing exploded.
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            This simple page proves that your Next.js site builds, serves, and responds inside Coolify.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-slate-200">
            <div className="h-3 w-3 rounded-full bg-lime-400" />
            Build + Start ready
          </div>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200"
            >
              <h2 className="text-lg font-semibold text-white">{step.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{step.body}</p>
            </article>
          ))}
        </section>

        <footer className="mt-10 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Need a deeper check? Add `/health` or other routes before you promote to staging. This page ensures your default
            route loads without secrets.
          </p>
          <a
            className="text-sky-300 underline-offset-4 transition hover:underline"
            href="https://coolify.io/docs/"
            target="_blank"
            rel="noreferrer"
          >
            Open Coolify docs
          </a>
        </footer>
      </main>
    </div>
  );
}
