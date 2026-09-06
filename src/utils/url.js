/**
 * Join a root-relative path onto the configured Astro `base`.
 *
 * Astro rewrites the assets it generates itself, but paths written by hand in
 * markup are left alone — on a project page served from /bidiex-agency/ those
 * would 404. Route every hand-written absolute path through here.
 */
const BASE = import.meta.env.BASE_URL;

export function withBase(path = '/') {
    return `${BASE.replace(/\/$/, '')}/${String(path).replace(/^\//, '')}`;
}
