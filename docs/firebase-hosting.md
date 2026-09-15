# Firebase Hosting

Project: `project-rhapsody-eb1bc`

- Deck site: `project-rhapsody-deck-eb1bc`
- Live URL: https://project-rhapsody-deck-eb1bc.web.app
- Registered deck domain: `pr-preseed-investor-deck.project-rhapsody.com`
- Main site: `project-rhapsody-eb1bc`, reserved for the separate website.
- Registered main domain: `project-rhapsody.com`

The deck was deployed September 15, 2026. Custom domains still require GoDaddy
DNS changes and certificate provisioning. Main website content has not been
deployed; do not switch its A records until it is ready.

## Deploy the deck

```sh
npm ci
firebase login
firebase deploy --only hosting:deck --project project-rhapsody-eb1bc
```

The predeploy hook builds the static Next.js export in `out/` and explicitly
clears the GitHub Pages base path. The deck target cannot overwrite the main
website site. Existing GitHub Pages deployment remains unchanged; pushing to
GitHub does not automatically deploy Firebase.

## DNS handoff

Records returned by Firebase's custom-domain API:

| Type | GoDaddy Name | Value |
| --- | --- | --- |
| CNAME | pr-preseed-investor-deck | project-rhapsody-deck-eb1bc.web.app |
| TXT | @ | hosting-site=project-rhapsody-eb1bc |

Firebase also provided a temporary certificate-verification TXT record at
`_acme-challenge.pr-preseed-investor-deck`. Obtain its current value from
Firebase Hosting before a delayed handoff; challenge values can change.
The dated handoff package contains the value retrieved during setup.

Only after the main website is deployed and approved: replace existing root
A values `15.197.225.128` and `3.33.251.168` with `199.36.158.100`.
Preserve nameservers, MX, email authentication records, and unrelated DNS.
The `www` hostname has not been registered in Firebase. Review it separately
before switching the main domain if it is needed.

Check ownership, hosting, and SSL status in Firebase after DNS changes.
Reference: https://firebase.google.com/docs/hosting/custom-domain
