const sharp = require('sharp');

// Let's refine stomach:
// The stomach is drawn as a continuous outline of the organ
const stomachSvg = `
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="29" stroke="#bca06b" stroke-width="1.6" />
  <g transform="translate(1, -1)">
    <!-- Continuous organ outline matching the card -->
    <path 
      d="M 24 15 
         L 24 23 
         C 24 28, 27 34, 27 39 
         C 27 42, 23 44, 18 44 
         L 13 44 
         L 13 50 
         L 17 50 
         C 27 50, 31 46, 31 46
         C 37 45, 47 38, 47 29
         C 47 20, 37 17, 30 18
         L 30 15 
         Z" 
      stroke="#bca06b" 
      stroke-width="1.5" 
      stroke-linejoin="round" 
      stroke-linecap="round"
      fill="none" 
    />
    <!-- Dot inside -->
    <circle cx="28" cy="42" r="1.3" fill="#bca06b" />
  </g>
</svg>
`;

// Also let's check leaf:
// In icon-leaf-zoom.png, the leaf has:
// 3 veins on left, 3 veins on right
const leafSvg = `
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="29" stroke="#bca06b" stroke-width="1.6" />
  <g transform="translate(0, 0)">
    <!-- Stem -->
    <path d="M 16 48 L 22 42" stroke="#bca06b" stroke-width="1.6" stroke-linecap="round" />
    <!-- Leaf outline -->
    <path d="M 22 42 C 17 33 21 21 44 16 C 44 38 33 47 22 42 Z" stroke="#bca06b" stroke-width="1.5" stroke-linejoin="round" fill="none" />
    <!-- Center vein -->
    <path d="M 22 42 Q 32 31 44 16" stroke="#bca06b" stroke-width="1.4" stroke-linecap="round" fill="none" />
    <!-- Veins left -->
    <path d="M 26 37 Q 23 33 22 31" stroke="#bca06b" stroke-width="1.2" stroke-linecap="round" />
    <path d="M 31 31 Q 27 27 26 24" stroke="#bca06b" stroke-width="1.2" stroke-linecap="round" />
    <path d="M 36 25 Q 33 21 32 19" stroke="#bca06b" stroke-width="1.2" stroke-linecap="round" />
    <!-- Veins right -->
    <path d="M 28 35 Q 33 37 36 38" stroke="#bca06b" stroke-width="1.2" stroke-linecap="round" />
    <path d="M 33 29 Q 38 31 41 31" stroke="#bca06b" stroke-width="1.2" stroke-linecap="round" />
    <path d="M 38 23 Q 41 24 43 24" stroke="#bca06b" stroke-width="1.2" stroke-linecap="round" />
  </g>
</svg>
`;

Promise.all([
  sharp(Buffer.from(stomachSvg)).resize(300, 300).png().toFile('public/test-svg-stomach.png'),
  sharp(Buffer.from(leafSvg)).resize(300, 300).png().toFile('public/test-svg-leaf.png'),
]).then(() => console.log('Updated stomach & leaf'));
