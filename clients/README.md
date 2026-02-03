# Client Gallery System - Instructions

## Overview
This client gallery system provides a secure, PIN-protected way for clients to access their photos and videos. Each client gets their own personalized page with links to their deliverables.

## Quick Start Guide

### Creating a New Client Page

1. **Copy the template**
   - Duplicate the `clients/template.html` file
   - Create a new folder in `clients/` with the client's name (e.g., `clients/trisha-vijay/`)
   - Rename the copy to `index.html` and place it in the new folder

2. **Customize the client page**
   
   Open the new `index.html` and replace the following placeholders:

   - `[CLIENT_NAMES]` - Client names (e.g., "Trisha & Vijay")
   - `[BACKGROUND_IMAGE_PATH]` - Path to background image (e.g., "../../assets/gallery/compressed/trisha-vijay-bg.jpg")
   - `[EVENT_NAME_1]` - Event name (e.g., "Wedding Celebration")
   - `[EVENT_DATE_1]` - Event date (e.g., "December 15, 2025")
   - `[PHOTOS_LINK_1]` - Link to photo gallery (Lightfolio, Pixieset, etc.)
   - `[VIDEOS_LINK_1]` - Link to video gallery (Vidflow, etc.)
   - `[PIN_CODE]` - Set a unique 4-6 digit PIN for the client

3. **Add multiple events (optional)**
   
   To add more events, uncomment and duplicate the event card section:
   ```html
   <div class="event-card">
       <h2 class="event-title">Engagement Ceremony</h2>
       <p class="event-date">September 20, 2025</p>
       <!-- Add deliverables here -->
   </div>
   ```

4. **Upload background image**
   
   - Place the client's background image in `assets/gallery/compressed/`
   - Update the background image path in the HTML

## File Structure

```
clients/
├── template.html              # Base template for new client pages
├── client-styles.css          # Shared styling for all client pages
├── trisha-vijay/             # Example client folder
│   └── index.html
├── jyo-suriya/               # Example client folder
│   └── index.html
└── README.md                 # This file
```

## Features

### PIN Protection
- Each client page requires a PIN to access
- PIN is stored in the JavaScript section of each page
- Session-based: Once entered correctly, clients don't need to re-enter during the same session
- Simple shake animation for incorrect PIN attempts

### Deliverable Cards
Three types of deliverable links included:
- **Photos** (Green accent) - Photo galleries
- **Videos** (Blue accent) - Video collections
- **Special** (Orange accent) - Highlight reels or special edits

### Responsive Design
- Mobile-friendly layout
- Adapts to all screen sizes
- Touch-friendly buttons and links

## Customization Tips

### Changing Colors
Edit `clients/client-styles.css`:
- Main brown: `#8B4513`
- Dark brown: `#654321`
- Adjust gradient colors in `.pin-overlay` and `.client-header`

### Adding More Deliverable Types
Copy the deliverable link structure:
```html
<a href="[YOUR_LINK]" target="_blank" class="deliverable-link special">
    <div class="icon">🎨</div>
    <div class="details">
        <h3>Custom Title</h3>
        <p>Description</p>
    </div>
</a>
```

### Changing Icons
Replace emoji icons with:
- Any emoji (📸 🎥 ✨ 🎨 💍 etc.)
- Font Awesome icons (requires adding Font Awesome)
- Custom images

## Access URLs

Clients will access their pages at:
- `storiesblossomed.ca/clients/trisha-vijay`
- `storiesblossomed.ca/clients/jyo-suriya`
- `storiesblossomed.ca/clients/[client-folder-name]`

## Security Notes

⚠️ **Important**: This is a basic client-side PIN protection suitable for casual privacy. It's not highly secure since the PIN is visible in the page source code. For more sensitive content, consider:
- Server-side authentication
- Password hashing
- Backend database for credentials

For most wedding/event deliveries, this level of protection is sufficient as it:
- Prevents accidental access
- Requires clients to have the PIN you provide
- Keeps search engines from indexing content (add robots.txt)

## Tips for Workflow

1. **Create client folder** when booking is confirmed
2. **Set up page early** with placeholder text
3. **Update links** as you upload to Lightfolio/Pixieset/Vidflow
4. **Test the PIN** before sending to client
5. **Send link + PIN** separately for added security (email link, text PIN)

## Example Client Communication

> Hi Trisha & Vijay!
> 
> Your wedding gallery is ready! 🎉
> 
> Visit: storiesblossomed.ca/clients/trisha-vijay
> PIN: 123456
> 
> All your photos and videos are available there. Enjoy reliving your special day!
> 
> - Stories Blossomed Team
