import style from '../page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { RegistrationStatus } from '../types/types';
import { checkLoginStatus} from '../utils/checkLoginStatus';

function Header({islogged} : RegistrationStatus){
    return (
        <header className={style.header}>
            <Image src="/favicon.ico" alt="Logo" className={style.img} width={40} height={40}/>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <Link href="/Leaderboards" className={style.li}>الأبطال</Link>
                    <Link href="/About" className={style.li}>من نحن</Link>
                    <Link href="/Home" className={style.li}>الصفحة الرئيسية</Link>
                    <Link href="/login" className={style.li}>{checkLoginStatus(islogged)}</Link>
                    

                </ul>
            </nav>
        </header>
    );
}

export default Header;