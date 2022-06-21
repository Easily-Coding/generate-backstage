import type { NextPage } from "next";
import styles from "./index.module.scss";
import Test from "../../components/test";

interface HomeProps {
  id: number;
}

const Home: NextPage<HomeProps> = ({ id }: HomeProps) => {
  return (
    <Test>
      <div className={styles.container}>{id}</div>
    </Test>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: { id: 1 },
  };
}
