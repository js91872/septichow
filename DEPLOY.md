# SepticHow deployment on AICCloud

Repository: https://github.com/js91872/septichow
Project directory: /var/www/septichow
Systemd service: septichow
Application port: 3004

## Public routing

AICCloud's managed Caddy proxy routes septichow.com and www.septichow.com directly to application port 3004. Both domain mappings must be active. The application must listen on 0.0.0.0 so the managed proxy can reach it. Binding only to 127.0.0.1 caused public 502 responses even while local nginx checks passed.

The www redirect is implemented in next.config.ts because the public route bypasses local nginx. It permanently redirects to https://septichow.com and preserves paths and query strings.

Cloudflare DNS uses an A record for septichow.com pointing to 135.125.9.81 and a CNAME for www pointing to septichow.com. The confirmed working setup uses DNS-only records. Do not add a 127.0.0.1 DNS record.

## Systemd configuration

Use a dedicated unprivileged septichow user with read access to the project:

```ini
[Unit]
Description=SepticHow website
After=network.target

[Service]
Type=simple
User=septichow
WorkingDirectory=/var/www/septichow
Environment=NODE_ENV=production
Environment=HOSTNAME=0.0.0.0
Environment=PORT=3004
ExecStart=/usr/bin/node /var/www/septichow/.next/standalone/server.js
Restart=on-failure
RestartSec=5
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```

After editing the unit, run systemctl daemon-reload and restart septichow.

## Deploy an update

Run on the VPS as root:

```bash
(
set -e
cd /var/www/septichow
git pull --ff-only origin main
npm ci
npm test
npm run build
mkdir -p .next/standalone/.next
rm -rf .next/standalone/.next/static .next/standalone/public
cp -a .next/static .next/standalone/.next/static
cp -a public .next/standalone/public
chmod -R a+rX .next/standalone
systemctl restart septichow
systemctl is-active septichow
)
```

## Verify

```bash
curl -I --max-time 15 https://septichow.com/
curl -I --max-time 15 https://www.septichow.com/tools/
curl -I --max-time 15 https://septichow.com/sitemap.xml
```

Expect root and sitemap to return 200, and www to return 308 with a Location on septichow.com.

Public TLS is handled by the managed proxy. The separate local nginx certificate obtained using manual DNS validation expires on 2027-01-03 and does not renew automatically. If that local certificate remains in use, automate renewal or renew it before expiry.

Submit https://septichow.com/sitemap.xml in Google Search Console after verifying ownership. Configure a working contact inbox. Check all calculators and browser schedule persistence and ICS import before declaring those flows verified.
