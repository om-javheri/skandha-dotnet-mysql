import { useEffect, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import { startForms, startMenus, startMotion } from './site-scripts';
import './site.css';

/** The site's shared page behaviour each page uses (entrance animations, folding menus, forms that send). */
export interface PageScripts {
  motion?: boolean;
  menu?: boolean;
  forms?: boolean;
}

/** Starts the page scripts once the page is on screen: they work on the finished page, as on the HTML site. */
function Scripts({ motion, menu, forms }: PageScripts) {
  useEffect(() => {
    if (motion) startMotion();
    if (menu) startMenus();
    if (forms) startForms();
  }, [motion, menu, forms]);
  return null;
}

/** Shows a page in #root. */
export function mount(Page: ComponentType, scripts: PageScripts = {}) {
  createRoot(document.getElementById('root')!).render(
    <>
      <Page />
      <Scripts {...scripts} />
    </>,
  );
}
