'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleTasbeeh = () => setCount(prev => prev + 1);
  const resetCounter = () => setCount(0);

  return (
    <>
        <main className={styles.cardContainer}>
        <div className={styles.card}>
        <h2>🌙 مسبحة</h2>
        <p>عدد التسبيحات: {count}</p>
        <button className={styles.modern_btn} onClick={handleTasbeeh}>
            سبح
        </button>
        <button className={styles.modern_btn} onClick={resetCounter} style={{ marginTop: '10px', backgroundColor: '#000' }}>
            تصفير
        </button>
        </div>
        <div className={styles.card}>
            <h2>🌟 فوائد التسبيح</h2>
            <p>التسبيح يذكرنا بعظمة الله ويزيد من إيماننا.</p>
            <p>يعتبر التسبيح من أفضل العبادات التي تقربنا إلى الله.</p>
            <p>يساعد في تهدئة النفس وتخفيف التوتر.</p>
            <p>يعتبر التسبيح من أسباب المغفرة والرحمة.</p>
        </div>
        </main>
    </>
  );
}
