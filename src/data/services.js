/**
 * Bidiex Studio — Capabilities (Services section).
 *
 * `span` maps to the .bento-span-* classes of the 12-column bento grid:
 *   row 1 → 5 + 7 · row 2 → 4 + 4 + 4 · row 3 → 5 + 7
 * `title` / `desc` are the Spanish defaults rendered at build time; the i18n
 * runtime swaps them through the srv.* keys in src/scripts/translations.js.
 */
export const services = [
    {
        id: 'design',
        span: 5,
        icon: 'pen-tool',
        title: 'Diseño UI/UX',
        desc: 'Diseñamos interfaces claras y sistemas de diseño consistentes que reducen la fricción y hacen que cada interacción se sienta obvia.',
    },
    {
        id: 'dev',
        span: 7,
        icon: 'code-xml',
        title: 'Desarrollo de Software',
        desc: 'Construimos aplicaciones robustas y escalables adaptadas para resolver problemas empresariales complejos con arquitecturas modernas.',
    },
    {
        id: 'web',
        span: 4,
        icon: 'layout-dashboard',
        title: 'Aplicaciones Web',
        desc: 'Desarrollamos plataformas web que funcionan igual de bien en escritorio que en móvil, con datos en tiempo real y rendimiento medible.',
    },
    {
        id: 'auto',
        span: 4,
        icon: 'workflow',
        title: 'Automatización',
        desc: 'Conectamos tus herramientas y eliminamos el trabajo manual repetitivo con flujos que se ejecutan solos y sin errores.',
    },
    {
        id: 'brand',
        span: 4,
        icon: 'palette',
        title: 'Identidad de Marca',
        desc: 'Construimos identidades visuales coherentes: marca, paleta, tipografía y tono aplicados de forma consistente en cada punto de contacto.',
    },
    {
        id: 'landing',
        span: 5,
        icon: 'layout-template',
        title: 'Landing Pages',
        desc: 'Creamos páginas rápidas y enfocadas en conversión, optimizadas para SEO y listas para sostener tus campañas.',
    },
    {
        id: 'consulting',
        span: 7,
        icon: 'compass',
        title: 'Consultoría Técnica',
        desc: 'Auditamos tu arquitectura y tu stack para detectar cuellos de botella y trazar un plan técnico que sostenga tu crecimiento.',
    },
];
