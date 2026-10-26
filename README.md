# Learnify Public School - Official Website Codebase

**Location:** Learnify Public School, Tyonda Rd, opp. Hotel Yogeshwari, Ganj Basoda, Madhya Pradesh 464221  
**Motto / Philosophy:** *"Learn with Fun"* — Activity-based learning, cognitive brain development, child safety awareness, and value-oriented holistic education.  
**Grade Spectrum:** Play Group to Class 8th  
**Admissions:** Session 2026-27  

---

## 🌟 Overview & Architecture

This repository contains the complete, production-ready static website codebase for **Learnify Public School**. It is engineered following modern web standards: semantic HTML5, isolated modular CSS3 (Grid & Flexbox), and vanilla JavaScript with zero heavy external runtime dependencies.

### File Structure
```
site/
├── assets/
│   ├── gallery/         # 16 authentic photos from Google Business & school profile
│   ├── logo.png         # Official high-resolution transparent school logo
│   └── logo-original.png# Original uploaded logo source
├── index.html           # Semantic HTML5 architecture & content
├── style.css            # Responsive CSS3 styles with CSS custom properties
├── script.js            # Vanilla JS for navigation, form validation, gallery & lightbox
└── README.md            # Documentation and deployment instructions
```

---

## 🚀 Key Features

1. **Official School Logo & Real Imagery**: High-res logo in sticky navbar, footer, and favicon, paired with authentic campus photography.
2. **Top Announcement & Utility Bar**: Displays school motto, operational hours, helpline numbers, and location quick-links.
3. **Sticky Header & Accessible Navigation**:
   - Official brand logo with hover feedback.
   - Comprehensive navigation including links to **Campus Gallery** and **Parent Reviews**.
   - Mobile hamburger menu with smooth transitions.
   - Quick "Admission Inquiry" CTA button.
4. **Hero Section with Real Campus Showcase**:
   - Hero visual featuring authentic faculty and campus life photography.
   - Dynamic typography highlighting the *"Learn with Fun"* doctrine.
   - Google rating badge (5.0 ★) and quick trust metric counters.
5. **Interactive Campus Gallery (`#gallery`)**:
   - 15 authentic photos covering classrooms, 15th August Independence Day celebrations, Gandhi Jayanti, campus recreation, and teaching staff.
   - Category filter tabs: *All*, *Classrooms & Learning*, *Events & Celebrations*, *Campus Life*, *Faculty & Mentors*.
   - **Full-Screen Interactive Lightbox**: Supports keyboard arrows, close button, touch swipe gestures on smartphones, and dynamic photo counters.
6. **Verified Google Reviews Showcase (`#reviews`)**:
   - **5.0 ★ Rating Badge** based on 16 verified Google Maps reviews.
   - **"Identifies as Women-Owned"** institutional badge (Director: Mrs. Preeti Saint Bhavsar).
   - Testimonial cards featuring real parent feedback.
   - Direct button to **"Write a Google Review"** linked directly to the Google Maps place ID (`ChIJNyKGX4pXeTkRdKk8gH1CgRg`).
7. **About Us & Foundational Stage Pedagogy**:
   - Spotlight on Learnify's native child-centric foundational curriculum (Play Group, Nursery, LKG, UKG).
   - 4 Core Pillars: Cognitive Brain Development, Activity-Based Learning, Child Awareness & Safety, and Moral Values.
8. **Core Academic Offerings (3-Column Responsive Grid)**:
   - **Foundational Years:** Play Group, Nursery, LKG, UKG with sensory kits and phonics.
   - **Middle Years:** Classes 1st through 8th with STEM, linguistic fluency, and analytical projects.
   - **Campus Facilities:** Safe school transport with attendants, smart digital classrooms, and 24/7 CCTV vigilance.
7. **Campus Infrastructure Showcase**: 6-card feature grid highlighting classrooms, transport, reading nooks, CCTV security, creative arts lab, and parent-teacher updates.
8. **Admissions & Campus Schedule Panel**:
   - **Direct WhatsApp Inquiry Pipeline:** Full client-side evaluation for Parent Name, 10-digit Phone Number, Child Age (2–15), Target Grade selection, and custom notes; instantly formats and dispatches the lead directly to the school's WhatsApp (`+91 94060 37165`).
   - **Interactive Modal Feedback:** Displays confirmation dialog with entered details, auto-resets the form, and provides a direct WhatsApp launcher button.
   - **Schedule Table:** Mon–Fri: 9:00 AM – 2:00 PM | Sat: 10:00 AM – 1:00 PM | Sun: Closed.
   - **Direct Helpline Cards & WhatsApp:** Instant click-to-call and pre-filled WhatsApp links.
9. **Interactive Google Maps Embed**: Responsive iframe centered on Tyonda Road, opposite Hotel Yogeshwari in Ganj Basoda, with landmark highlights.
10. **Parent FAQs**: Accessible accordion addressing early learning philosophy, transport routes, and school timings.
11. **Semantic Footer & Mobile Bottom Bar**: Comprehensive site map, contact metadata, and mobile action buttons (`Call`, `WhatsApp`, `Inquire`).

---

## 🎨 Color Palette & Design Tokens (Harmonized with Logo)

| Token | Hex Code | Purpose |
|---|---|---|
| `--color-primary` | `#2558B8` | Royal Blue from "LEARNIFY" brand mark |
| `--color-primary-dark` | `#1E3A8A` | Deep Institutional Navy for Headings & Bars |
| `--color-secondary` | `#EE7722` | Vibrant Warm Orange from "PUBLIC SCHOOL" pill |
| `--color-secondary-hover` | `#D96614` | Deep Orange for interactive hover states |
| `--color-accent-green` | `#10B981` | Emerald for safety, vitality & growth |
| `--color-bg-alt` | `#F9FAFB` | Ultra-light slate/gray section panels |
| `--color-bg-body` | `#FFFFFF` | Crisp pure white canvas |

---

## 💻 Local Testing & Deployment

### Quick Local Preview (Python 3)
```powershell
# Navigate to the project directory
cd e:\LearnifyPublicSchool\site

# Start a local HTTP server
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Static Hosting
This codebase can be deployed directly to:
- **GitHub Pages**
- **Cloudflare Pages**
- **Netlify**
- **Vercel**
- Any standard Apache / NGINX / CPanel web host
