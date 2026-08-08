# Lexi Hunter — Portfolio Site

A simple static site (plain HTML/CSS, no build tools) with pages for Home, About,
Copywriting, Creative Writing, Photo, Film, Branding, Digital Art, AI, and Contact.

## Before you publish

- Replace all `[bracketed placeholder]` text with your real content.
- Drop real images into the `images/` folder and reference them (e.g. `<img src="images/photo1.jpg">`).
- Update the contact form's `action` attribute in `contact.html` if you want it to actually send
  email — sign up free at [formspree.io](https://formspree.io) and paste your form endpoint in.
- Update the Instagram handle / email in the footer (in every page) if needed.

## 1. Install Git (one-time)

Check if you already have it:

```
git --version
```

If that errors, install it:

- **Mac**: run `git --version` in Terminal — macOS will prompt you to install Xcode Command Line
  Tools, which includes Git. Or install via [git-scm.com](https://git-scm.com/downloads).
- **Windows**: download the installer from [git-scm.com](https://git-scm.com/downloads).

Then set your identity (one-time):

```
git config --global user.name "Lexi Hunter"
git config --global user.email "ilexihunter3@gmail.com"
```

## 2. Create the GitHub repo

1. Go to [github.com/new](https://github.com/new).
2. Name it — for a personal site at `yourusername.github.io`, name the repo exactly
   `yourusername.github.io` (replace `yourusername` with your actual GitHub username). This gives
   you the cleanest URL. Otherwise, any repo name works and your site will live at
   `yourusername.github.io/repo-name`.
3. Leave it public, don't initialize with a README (you already have files locally).
4. Click **Create repository** and copy the repo URL it gives you (looks like
   `https://github.com/yourusername/yourusername.github.io.git`).

## 3. Push your site

Open Terminal, `cd` into this folder, then run:

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

(Replace the URL with the one from step 2. You'll be prompted to sign in to GitHub the first
time — follow the browser login flow it opens.)

## 4. Turn on GitHub Pages

1. On your repo page, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute, then your site is live at:
   - `https://yourusername.github.io` (if you named the repo `yourusername.github.io`), or
   - `https://yourusername.github.io/repo-name` (otherwise)

## 5. Making future updates

After editing any file:

```
git add .
git commit -m "Describe what changed"
git push
```

Changes go live within a minute or two.

## Moving lexihuntercreative.com from Squarespace to GitHub Pages

When you're ready to switch, do this in order:

1. **Add the domain to GitHub first.** In your repo, go to Settings → Pages → Custom domain,
   type `lexihuntercreative.com`, and save. This creates a `CNAME` file in the repo (required
   before touching DNS, or someone else could squat your subdomain).

2. **Check how the domain is set up in Squarespace** (Settings → Domains → click the domain):
   - **Registered through Squarespace** — the domain stays yours even if you cancel the
     Squarespace site; it won't expire or disappear. Open the domain's DNS settings and switch
     to custom/advanced DNS. Remove Squarespace's existing A/CNAME records and add:
     - `A` record, host `@`, values: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
       `185.199.111.153`
     - `CNAME` record, host `www`, value: `yourusername.github.io`
   - **Bought elsewhere (GoDaddy, Namecheap, etc.) and just connected to Squarespace** — open
     the domain in Squarespace and click **Disconnect domain** (this only unhooks it from
     Squarespace hosting, it doesn't affect registration). Then log into the actual registrar
     and add the same DNS records there.

3. **Wait for DNS to propagate** (up to 24–72 hours). Your Squarespace site keeps working the
   whole time — nothing goes down mid-switch. Check progress at
   [whatsmydns.net](https://www.whatsmydns.net).

4. Back in GitHub repo Settings → Pages, once DNS resolves you can check **Enforce HTTPS** for
   a secure padlock.

Sources: [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Squarespace: what to do with your domain if you cancel your site](https://support.squarespace.com/hc/en-us/articles/205845348-What-to-do-with-your-domain-if-you-cancel-your-website), [Squarespace: disconnecting a third-party domain](https://support.squarespace.com/hc/en-us/articles/205812428-Disconnecting-a-third-party-domain)
