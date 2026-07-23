import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const SCHEDULER_URL = 'https://docs.dhtmlx.com/scheduler/';

// MKS-3075: Event Calendar is no longer sold to new customers. The docs stay
// online for existing licensees, so every page carries this notice.
//
// Two elements on purpose. The outer bar is what sticks below the navbar: it
// spans the full width and carries the page background, so content scrolling
// past never shows through the gap around the notice. The inner element is the
// notice itself — container-width, centred, with all four borders visible.
//
// Everything else Docusaurus sticks to the top — the doc sidebar, the desktop
// TOC, anchor scrolling — is offset from the navbar height alone, so it would
// slide underneath. Rather than hard-code a height that breaks the moment the
// text wraps differently, publish the measured height of the whole bar as
// `--ec-notice-height` and let custom.css add it to those offsets.
export default function ProductNotice() {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return undefined;

    const root = document.documentElement;
    const publishHeight = () => {
      root.style.setProperty('--ec-notice-height', `${el.offsetHeight}px`);
    };

    publishHeight();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', publishHeight);
      return () => window.removeEventListener('resize', publishHeight);
    }

    const observer = new ResizeObserver(publishHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className={styles.bar}>
      <aside className={styles.notice} role="note">
        <p className={styles.text}>
          <strong>
            DHTMLX Event Calendar is no longer available to new customers.
          </strong>{' '}
          This documentation is maintained for customers with an existing Event
          Calendar license. For new projects, please consider{' '}
          <a
            href={SCHEDULER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            DHTMLX Scheduler
          </a>
          .
        </p>
      </aside>
    </div>
  );
}
