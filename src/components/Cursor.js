import { useEffect, useState } from 'react';

import styles from './Cursor.module.css';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    const $cursor = document.getElementById('cursor');

    if (!$cursor) return;

    const mouseMoveHandler = (event) => {
      if (!moved) {
        $cursor.style.display = 'block';
        setMoved(true);
      }
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - 50, y: clientY - 50 });
      console.log(clientX, clientY);
    };
    const mouseOverHandler = () => {
      $cursor.style.display = 'none';
    };
    const mouseLeaveHandler = () => {
      $cursor.style.display = 'block';
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document
      .getElementById('viewport')
      ?.addEventListener('mouseover', mouseOverHandler);
    document
      .getElementById('viewport')
      ?.addEventListener('mouseleave', mouseLeaveHandler);
  }, []);

  return (
    <div
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      className={styles.cursor}
      id="cursor"
    ></div>
  );
}
