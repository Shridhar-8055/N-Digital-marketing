/* Tailwind CDN config — must load AFTER the cdn.tailwindcss.com script.
   Mirrors the CSS custom properties in site.css; keep the two in step. */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sanchez', 'Georgia', 'serif'],
      },
      colors: {
        ink:       '#1a0505',   // page background — maroon-black
        surface:   '#240909',
        surface2:  '#2d0d0d',
        line:      '#3a1616',
        brand:     '#7a0000',   // secondary (dominant in logo)
        brandAlt:  '#700c0c',   // primary
        brandLift: '#9c1111',   // lifted tint for gradients / hover
        accent:    '#f5f5dc',   // beige
        cream:     '#f8f7f2',   // neutral light
        creamAlt:  '#f9fafb',
        inkDark:   '#1a1414',   // body text on light surfaces
      },
      maxWidth: { site: '100%' },   // full-bleed shell; gutters come from px-* on the container
    }
  }
}
