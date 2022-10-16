import PrimaryLayouts from '../components/layouts/cat/PrimaryLayouts';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <div className={styles.container}>this is the about now</div>;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayouts>{page}</PrimaryLayouts>;
};
