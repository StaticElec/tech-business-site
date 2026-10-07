/* =============================================================================
   SITE CONTENT — the one file to edit for normal website changes.
   =============================================================================

   Everything visitors read on the homepage (and the blog page heading) comes
   from this file. Components only arrange it on the page.

   HOW TO EDIT
   - Change the text between the quotes. Keep the quotes and commas.
   - Anything marked  TODO  is placeholder content you are expected to replace.
     Search this file for "TODO" to find every one.
   - After saving, the dev server (`npm run dev`) reloads the page automatically.

   IMAGES
   - Photos live in  src/assets/images/  (NOT in public/). Astro resizes and
     compresses them automatically when the site is built.
   - Each image path below is the exact file the site looks for. Drop a photo
     in with that exact file name and it replaces the placeholder box.
   - Until a file exists, a labelled placeholder box is shown instead.
   - Any reasonably sized .jpg / .png / .webp works. Landscape photos at least
     1600px wide look best. They are cropped to fit, so keep the subject centred.

   Blog / repair articles do NOT go here — see src/content/blog/README.md.
   ========================================================================== */

/* -----------------------------------------------------------------------------
   CONTACT DETAILS
   Used everywhere: header, hero, call-to-action, footer, mobile call bar,
   and search-engine data. Change them once here.
----------------------------------------------------------------------------- */

// TODO: Your phone number in international format, digits only after the "+".
// This is what phones actually dial. Example for a US number: "+15555550123".
const PHONE = "+14242450594";

// TODO: The phone number as you want people to read it.
const PHONE_DISPLAY = "(424) 245-0594";

export const site = {
  /* ---------------------------------------------------------------------------
     BUSINESS & SEO
  --------------------------------------------------------------------------- */

  // TODO: Your business name. Appears in the header (if no logo), footer,
  // browser tab and search results.
  name: "Azrotek Computer Services",

  // TODO: The live web address of the site, with https:// and no trailing slash.
  // Used for canonical URLs, the sitemap and social-media previews.
  url: "https://www.azrotek.com",

  // Language/region for the page and for date formatting on the blog.
  locale: "en-US",

  seo: {
    // TODO: Browser-tab / search-result title for the homepage.
    title: "Azrotek Computer Services",
    // TODO: One or two plain sentences shown under your link in search results.
    description:
      "Local computer and laptop repair, Windows and software problems, upgrades, and data transfer. Call or send a message to get help!",
    // Optional image shown when the site is shared on social media.
    // Put the file in public/ and give its path, e.g. "/og-image.jpg"
    // (1200 × 630 px works best). Leave empty ("") for none.
    ogImage: "",
  },

  // Adds basic LocalBusiness data for search engines using ONLY the fields in
  // this file (name, phone, email, service area, social links, website).
  // No address, hours or ratings are published. Set to false to turn off.
  structuredData: true,

  // TODO: Where you work. Shown in the hero and footer. Leave "" to hide.
  serviceArea: "Serving Sherman Oaks and surrounding areas",

  /* ---------------------------------------------------------------------------
     CONTACT
  --------------------------------------------------------------------------- */
  contact: {
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,

    // TODO (optional): Email address shown in the footer. Leave "" to hide.
    email: "admin@azrotek.com",

    // Label for every Call button. Where there's room, the phone number is
    // shown after it automatically (e.g. "Call (555) 555-0123").
    callLabel: "Call",

    // The "Message" button used in the header, hero, final CTA and mobile bar.
    // By default it opens a text message to your phone number.
    // You can point it somewhere else instead, for example:
    //   Facebook Messenger:  "https://m.me/yourpagename"
    //   WhatsApp:            "https://wa.me/15555550123"
    message: {
      href: `sms:${PHONE}`,
      label: "Send a text", // Long label (hero, final CTA)
      shortLabel: "Text", // Short label (header, mobile bar)
    },
  },

  // TODO: Your social-media pages. Shown in the footer.
  // Delete the lines you don't use. An empty list [] hides the section.
  social: [
    { label: "Facebook", href: "https://www.facebook.com/yourpage" },
  ],

  /* ---------------------------------------------------------------------------
     HEADER
  --------------------------------------------------------------------------- */
  header: {
    // Optional logo. Put your logo file at this path (SVG or PNG).
    // Until the file exists, the business name is shown as text instead.
    logo: {
      src: "/src/assets/images/logo.png",
      alt: "AzroTek Computer Services", // TODO: usually just your business name
      // Height of the logo in the header, in pixels. Width follows the file.
      height: 44,
    },
    blogLabel: "Blog",
  },

  /* ---------------------------------------------------------------------------
     HERO (the big photo + heading at the top of the homepage)
  --------------------------------------------------------------------------- */
  hero: {
    // TODO: The main headline. There is only one of these on the homepage.
    heading: "Local computer and laptop repair",
    // TODO: A short paragraph under the headline.
    text: "Slow laptop, Windows errors, or a computer that won't start? Give us a call or send a message and tell us what's going on. We'll let you know how we can help.",
    // TODO: Photo for the hero. Landscape, roughly 4:3. Ideally you at work,
    // your workbench, or a computer you are repairing.
    image: "/src/assets/images/hero-repair.jpg",
    imageAlt: "TODO: Describe the hero photo, e.g. 'Laptop open on a repair bench with the bottom cover removed'",
  },

  /* ---------------------------------------------------------------------------
     SERVICES (the interactive section with tabs)
     - Each { ... } block is one service and one tab, shown in this order.
     - To ADD a service: copy a whole block, paste it, change every value.
       "id" must be unique, lowercase, with dashes instead of spaces.
     - To REMOVE a service: delete its whole block.
     - "tabLabel" is the short name on the tab button; keep it to 1–3 words.
     - Images are landscape, roughly 4:3.
  --------------------------------------------------------------------------- */
  servicesSection: {
    heading: "What we can help with",
    // TODO: Short line under the heading. Leave "" to hide.
    intro: "Choose a service below. If your problem isn't listed, call anyway and ask.",
  },

  // TODO: Replace all service text below with your own descriptions.
  services: [
    {
      id: "laptop-desktop-repair",
      tabLabel: "Repair",
      title: "Laptop & Desktop Repair",
      description: [
        "Computer won't turn on, keeps shutting off, runs hot, or has a part that has stopped working? Get in touch and we'll work out what's causing it.",
        "Once we know what's wrong, we'll talk you through your options so you can decide what to do.",
      ],
      image: "/src/assets/images/service-laptop-repair.jpg",
      imageAlt: "TODO: Describe the photo",
    },
    {
      id: "windows-software",
      tabLabel: "Windows & Software",
      title: "Windows Installation & Software Problems",
      description: [
        "Help with Windows that won't start, constant error messages, updates that keep failing, unwanted programs, and pop-ups that won't go away.",
        "When a fresh start is the best fix, we can reinstall Windows and get your computer set up again.",
      ],
      image: "/src/assets/images/service-software.jpg",
      imageAlt: "TODO: Describe the photo",
    },
    {
      id: "hardware-upgrades",
      tabLabel: "Upgrades",
      title: "Hardware Upgrades",
      description: [
        "An older computer can often be given a new lease of life with a solid-state drive or more memory.",
        "We'll check what your computer supports and tell you whether an upgrade is worth doing.",
      ],
      image: "/src/assets/images/service-upgrades.jpg",
      imageAlt: "TODO: Describe the photo",
    },
    {
      id: "data-transfer-backup",
      tabLabel: "Data Transfer",
      title: "Data Transfer & Backup",
      description: [
        "Moving to a new computer? We can copy across your files, photos and documents so everything is where you expect it.",
        "We can also help you set up a simple backup so your important files are kept safe going forward.",
      ],
      image: "/src/assets/images/service-data-transfer.jpg",
      imageAlt: "TODO: Describe the photo",
    },
    {
      id: "setup-optimization",
      tabLabel: "Setup",
      title: "Computer Setup & Optimization",
      description: [
        "Setting up a new computer, or getting a slow one running smoothly again: clearing out programs you don't need, sorting out what runs at startup, and making sure updates and basic security are in place.",
      ],
      image: "/src/assets/images/service-setup.jpg",
      imageAlt: "TODO: Describe the photo",
    },
  ],

  /* ---------------------------------------------------------------------------
     FINAL CALL-TO-ACTION (the dark green band near the bottom)
  --------------------------------------------------------------------------- */
  finalCta: {
    heading: "Need help with your computer?",
    text: "Message us or give us a call and tell us what's going on.",
  },

  /* ---------------------------------------------------------------------------
     MOBILE CALL BAR
     A small bar fixed to the bottom of phone screens with Call and Message.
     Set enabled to false to remove it.
  --------------------------------------------------------------------------- */
  mobileBar: {
    enabled: true,
  },

  /* ---------------------------------------------------------------------------
     FOOTER
  --------------------------------------------------------------------------- */
  footer: {
    // TODO: One short line under the business name. Leave "" to hide.
    text: "Computer and laptop repair.",
    blogLabel: "Repair blog",
  },

  /* ---------------------------------------------------------------------------
     BLOG PAGE (/blog) — the page heading and empty-state text only.
     Articles themselves live in src/content/blog/.
  --------------------------------------------------------------------------- */
  blog: {
    title: "Repair Blog",
    description: "Write-ups of computer repairs: the problem, what we found, and how it was fixed.",
    heading: "Repair Blog",
    intro: "Write-ups of real repairs: what the problem was, what we found, and how it was fixed.",
    emptyMessage: "No repair write-ups have been posted yet. Check back soon.",
    backLabel: "All repair write-ups",
  },
};

export type Service = (typeof site.services)[number];
