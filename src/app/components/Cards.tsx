import styles from '../page.module.scss';
import { CardStruct } from '../types/types';
import Link from 'next/link';

function Card({ title, content, link }: CardStruct) {
    return (
        <div className={styles.card}>
            <div className={styles.overlayContent}>
            <h2>{title}</h2>
            <p>{content}.</p>
            <Link href={link} className={styles.link_btn}>
            اضغط هنا
            </Link>
        </div>
        </div>
    );
}

export default Card;