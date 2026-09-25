/**
 * Bidiex Studio — Technology stack, shown as the scrolling band under the hero.
 * `slug` is the Simple Icons identifier; `brand` tints the logo in the band.
 *
 * Simple Icons has dropped some marks at their owners' request (OpenAI,
 * Adobe, Canva). Those carry an explicit `icon` URL from the Iconify API
 * instead, which takes precedence over `slug`.
 */
const ICONIFY = 'https://api.iconify.design';

export const stack = [
    { name: 'JavaScript',   slug: 'javascript',   brand: '#F7DF1E' },
    { name: 'TypeScript',   slug: 'typescript',   brand: '#3178C6' },
    { name: 'HTML5',        slug: 'html5',        brand: '#E34F26' },
    { name: 'CSS3',         slug: 'css',          brand: '#1572B6' },
    { name: 'React Native', slug: 'react',        brand: '#61DAFB' },
    { name: 'Supabase',     slug: 'supabase',     brand: '#3ECF8E' },
    { name: 'Expo',         slug: 'expo',         brand: '#FFFFFF' },
    { name: 'Vite',         slug: 'vite',         brand: '#646CFF' },
    { name: 'Node.js',      slug: 'nodedotjs',    brand: '#5FA04E' },
    { name: 'GSAP',         slug: 'gsap',         brand: '#0AE448' },
    { name: 'Claude',       slug: 'claude',       brand: '#D97757' },
    { name: 'OpenAI',       brand: '#FFFFFF', icon: `${ICONIFY}/simple-icons/openai.svg?color=%23ffffff` },
    { name: 'Gemini',       slug: 'googlegemini', brand: '#8E75B2' },
    { name: 'Photoshop',    brand: '#31A8FF', icon: `${ICONIFY}/logos/adobe-photoshop.svg` },
    { name: 'Illustrator',  brand: '#FF9A00', icon: `${ICONIFY}/logos/adobe-illustrator.svg` },
    { name: 'Canva',        brand: '#00C4CC', icon: `${ICONIFY}/devicon/canva.svg` },
];

/** The logo URL for one entry of the band. */
export const iconUrl = (tech) =>
    tech.icon ?? `https://cdn.simpleicons.org/${tech.slug}/${tech.brand.slice(1)}`;
