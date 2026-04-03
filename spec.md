# nexgenxfigures Portfolio

## Current State
The portfolio already has a full-page layout with:
- Dark anthracite background with particle animation
- HeroSection, ProjectsSection, ServicesSection, AboutSection, ContactSection, Navbar, Footer
- Existing ProjectsSection with project-card components
- Sample project images already generated in public/assets/generated/

## Requested Changes (Diff)

### Add
- BentoGallery section (or replace/enhance ProjectsSection) with a bento-box grid layout
- Each bento card: rounded corners (xl/2xl), diffuse box shadow
- Hover interaction on each card: smooth image zoom (transform scale on the inner img), overlay appears with project name and software used (Blender, ZBrush, etc.)
- Use the 4 existing generated images as content
- Bento layout: mixed sizes (some cards span 2 columns or 2 rows) to create visual variety

### Modify
- ProjectsSection: Replace or redesign to use the new bento-box gallery layout

### Remove
- Nothing to remove from app shell

## Implementation Plan
1. Create/replace ProjectsSection with a BentoGallery component using CSS grid with mixed column/row spans
2. Each card wraps an `<img>` with overflow:hidden and rounded corners
3. The image has `transition: transform 0.4s ease` and scales to 1.08 on group-hover
4. An overlay div (absolute, inset-0) fades in on hover showing project name + software badges
5. Use the 4 existing project images from /assets/generated/
6. Add 2-3 more sample projects using the same images for variety to fill the bento grid
