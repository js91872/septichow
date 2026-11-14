# AdSense readiness notes

The repository currently contains no AdSense script, Auto Ads integration, or ad-slot component. The policy below is ready for a future integration; it does not enable ads.

Google does not publish a required minimum number of pages or a domain-age threshold for AdSense approval. Its guidance asks for a live site with enough original, useful content for review. Page count alone cannot establish readiness.

## Routes excluded from advertising

Use `isAdEligibleRoute()` from `src/lib/adPolicy.ts` for any future manual ad component. Also add every route in `adExcludedRoutes` to AdSense Auto Ads page exclusions, because the AdSense account setting is external to this repository.

Excluded routes: `/my-septic-schedule`, `/contact`, `/privacy`, `/privacy-choices`, `/terms`, `/disclaimer`, `/editorial-policy`, `/methodology`, and `/corrections`.

Keep ads outside calculator forms, submit buttons, result actions, emergency and safety notices, and any element that can be mistaken for a tool control. If an ad is added below a calculator result, label it clearly and reserve its dimensions before load to avoid layout shifts.

## Before enabling ads

- Connect the approved AdSense account and add only the account-provided publisher ID and script.
- Confirm the privacy policy lists the ad technology providers actually selected in AdSense.
- Configure a Google-certified CMP that integrates with the IAB TCF before serving personalized ads in the EEA, UK, or Switzerland; test consent, withdrawal, and regional behavior.
- Implement and verify the applicable privacy-choice controls, including recognized opt-out preference signals where required, before enabling personalized advertising in covered jurisdictions.
- Recheck the privacy policy, route exclusions, and page layout after the first ad integration.
