# The Del Rio Post (Astro + Decap CMS)

Local dev: `npm install && npm run dev`. Build: `npm run build` (output in `dist/`).

## Publishing a story in /admin
1. Go to `https://<your-site>/admin/` and sign in with GitHub.
2. Click **Stories → New Story**.
3. Fill in Headline, Summary, pick a Category, upload a Photo, set the date.
4. Optional: turn on **Feature as lead story** (top of home page) or **Show as breaking news banner**.
5. Write the story and click **Publish**. Decap commits it to GitHub, Netlify rebuilds, and it's live in about a minute.

Change the tagline or Facebook link under **Site settings**.

## One-time setup
- Replace `OWNER/tdrp-site` in `public/admin/config.yml` with the real repo, and set `site_url`.
- In Netlify: connect the repo, then add a GitHub OAuth app under Site configuration → Access & security → OAuth.
- Delete the four `sample-*.md` stories in `src/content/stories/` before launch.
