# Custom New Tab Chrome Extension

This Chrome extension allows users to set a custom URL for their New Tab page. When a new tab is opened, the extension displays a clean page with a form where the user can input a URL. If a URL is already saved, the extension automatically redirects to that URL.

## Features

- **Custom New Tab Page:** Overrides Chrome's default New Tab page.
- **User-Defined URL:** Users can set and update the URL to which new tabs redirect.
- **Simple and Lightweight:** Minimal code for quick setup and easy customization.

## Files

- **manifest.json:** Configures the extension and specifies the New Tab override.
- **newtab.html:** The HTML page that replaces the default New Tab page.
- **newtab.js:** Handles form submission, URL validation, and redirection logic.
- **styles.css:** Provides modern, clean styles for the custom New Tab page.

## Installation

1. **Clone or Download:**
   ```bash
   git clone https://github.com/cjscrofani/custom-new-tab.git
