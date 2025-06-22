import Counter from '../components/Counter';
import styles from '../page.module.scss';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
    <header style={{width:"100%"}}><Header islogged={false}/></header>
    <main className={styles.cardContainer} style={{ backgroundColor: "#206a3b" }}>
        <h1 className={styles.title}>سبحان الله وبحمده سبحان الله العظيم</h1>
        <br />
        <Counter />
    </main>
    </>);
}
