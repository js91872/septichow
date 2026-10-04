# Debian VPS deployment

This is a NEW project. Do not replace an existing site directory or service.

1. Extract this folder to `/var/www/septichow` and create your GitHub repository when ready. There was no accessible `js91872/septichow` repository at build time.
2. Choose an unused port; 3004 below is only a proposed value. Check `ss -ltnp` first.
3. In the project directory:

```bash
npm ci
npm run typecheck
npm test
npm run build
mkdir -p .next/standalone/.next
cp -a .next/static .next/standalone/.next/
cp -a public .next/standalone/
```

Create a dedicated unprivileged service user, grant it read access to the deployed files, and configure systemd:

```ini
[Unit]
Description=SepticHow
After=network.target

[Service]
Type=simple
User=septichow
WorkingDirectory=/var/www/septichow
Environment=NODE_ENV=production
Environment=HOSTNAME=127.0.0.1
Environment=PORT=3004
ExecStart=/usr/bin/node /var/www/septichow/.next/standalone/server.js
Restart=on-failure
RestartSec=5
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```

Verify the node executable path on your server. Set up an nginx server for septichow.com and www.septichow.com pointing to `http://127.0.0.1:3004`, forward Host and X-Forwarded headers, redirect the www host to canonical septichow.com, and provision TLS through your usual certificate workflow after DNS points to your VPS. Do not change DNS until the local build works.

Before public launch: configure a working corrections/contact email; add your actual GSC verification token using Next.js metadata.verification; configure analytics only after updating privacy/consent as needed. Submit `https://septichow.com/sitemap.xml` after deployment.

Check homepage, `/tools`, each calculator, `/sources`, `/sitemap.xml` and `/robots.txt`. Real browser checks of schedule persistence and ICS import are still required.
