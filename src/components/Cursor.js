import { useEffect, useState } from 'react';

import styles from './Cursor.module.css';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - 50, y: clientY - 50 });
      console.log(clientX, clientY);
    };
    document.addEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <div
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      className={styles.cursor}
      id="cursor"
    ></div>
  );
}
