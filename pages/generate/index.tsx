import type { NextPage } from "next";
import styles from "./index.module.scss";
import Test from "../../components/test";
import { getData } from "../../controller/home";

interface HomeProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home: NextPage<HomeProps> = ({ title }: HomeProps) => {
  return (
    <Test>
      <div className={styles.container}>{title}</div>
    </Test>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getData();
  return {
    props: { ...data },
  };
}
