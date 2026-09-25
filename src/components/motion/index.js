/**
 * One illustration per capability, keyed by service id. Shared by the bento
 * cards on the home page and the hero of each capability page.
 */
import MotionDesign from './MotionDesign.astro';
import MotionDev from './MotionDev.astro';
import MotionWeb from './MotionWeb.astro';
import MotionAuto from './MotionAuto.astro';
import MotionBrand from './MotionBrand.astro';
import MotionLanding from './MotionLanding.astro';
import MotionConsulting from './MotionConsulting.astro';

export const visuals = {
    design: MotionDesign,
    dev: MotionDev,
    web: MotionWeb,
    auto: MotionAuto,
    brand: MotionBrand,
    landing: MotionLanding,
    consulting: MotionConsulting,
};
