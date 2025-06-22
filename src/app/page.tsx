import Header from "./components/Header";
import Card from "./components/Cards";
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header islogged={false}/>
      <div className={styles.cardContainer}>
        <Card
          title={"سبحان الله وبحمده سبحان الله العظيم"}
          content="من قالها مئة مرة في اليوم، حُطت خطاياه
          ولو كانت مثل زبد البحر كما ورد في صحيح البخاري ومسلم."
          link={"/SubhanAllahBeHamdeh"}
          ></Card>
        <Card
          title={"الله أكبر"}
          content="الله أكبر هي عبارة توكيد لعظمة الله تعالى، وتعني الله أكبر أو الله أكبر من كل شيء
                   من سبح لله حطت عنه عشرون سيئة.
                    ومن قال: الله أكبر، مثل ذلك. "
          link={"/AllahuAkbar"}
          ></Card>
          
        <Card
          title={"لا إله إلا الله"}
          content={"لا إله إلا الله هي كلمة التوحيد، وكلمة السعادة وكلمة النجاة، وكلمة الفلاح وكلمة النجاح، وكلمة السرور والفرح والنعيم في الدنيا والآخرة."}
          link={"/NoGodWithAllah"}
          ></Card>
        <Card
          title={"الحمد لله"}
          content="روى الترمذي عن جابر بن عبد الله رضي الله عنهما قال: سمعت رسول الله صلى الله عليه وسلم يقول: (أفضل الذكر لا إله إلا الله، وأفضل الدعاء الحمد لله)"
          link={"/AlHamdtoAllah"}
          ></Card>
      </div>
    </>
      );
}
