import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Carousel5 from '../../components/Carousel5/Carousel5';
import Carousel6 from '../../components/Carousel6/Carousel6';
import styles from './Main.module.scss';
import Collection from '../../components/Collection/Collection';

function Main() {
  return (
    <>
      <Nav />
      <section className={styles.MainSection}>
        <Carousel5 CategoryId={1} limit={10} categoryName={'박스오피스 순위'} />
        <Carousel5
          CategoryId={2}
          limit={10}
          categoryName={'위챠 Top 10 영화'}
        />
        <Carousel6 />
        <Collection />
      </section>
      <Footer />
    </>
  );
}
export default Main;
