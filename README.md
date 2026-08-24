# Wedding website

An elegant, mobile-friendly wedding invitation prepared for GitHub Pages.

## Personalise it

Edit `wedding-config.js` to replace the names, date, venue, dress code, story and RSVP message. Replace the placeholder panel in `index.html` with a photograph when ready, and embed your chosen RSVP provider in the RSVP section.

### Connect a Google Form

1. In Google Forms, open the RSVP form and choose **Send**, then select the link icon.
2. Make sure the form accepts responses and copy its public link.
3. Paste that link into the `googleFormUrl` field in `wedding-config.js`.

When a URL is configured, the site automatically replaces the placeholder button with the embedded form and a fallback link that opens it in a new tab.

## Preview locally

Open `index.html` directly, or run any static web server in this directory.

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/pages.yml` after GitHub Pages is configured to use GitHub Actions.
