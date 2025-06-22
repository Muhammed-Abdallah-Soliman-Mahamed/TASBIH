// app/about/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './scss/about.module.scss';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <>
    <Header islogged={false}></Header>
    <main className={styles.aboutContainer}>
        <Image
        src="/images/profile.jpg" // غيّر المسار حسب مكان صورتك
        alt="صورة محمد عبدالله"
        width={150}
        height={150}
        className={styles.profileImage}
        />
      <h1 className={styles.name}>محمد عبدالله</h1>
      <p className={styles.country}>بلدي: مصر</p>
      <p className={styles.phone}>
        رقم التواصل: <a href="tel:+201276041443">1276041443+20</a>
      </p>

      <div className={styles.socialIcons}>
        <Link href="https://github.com/Muhammed-Abdallah-Soliman-Mahamed" target="_blank">
          <Image src="/icons/github.png" alt="GitHub" width={32} height={32} />
        </Link>
        <Link href="https://www.facebook.com/1MuhammedAbdullah1?locale=ar_AR" target="_blank">
          <Image src="/icons/facebook.png" alt="Facebook" width={32} height={32} />
        </Link>
        <Link href="https://x.com/20Muhammed09" target="_blank">
          <Image src="/icons/x.png" alt="X (Twitter)" width={32} height={32} />
        </Link>
        <Link href="https://www.linkedin.com/in/muhammed-abdallah-61064b348/" target="_blank">
          <Image src="/icons/LinkedIn.png" alt="Linked In" width={32} height={32} />
        </Link>
      </div>
    </main>
    </>
  );
}
