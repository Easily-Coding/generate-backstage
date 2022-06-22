import type { NextPage } from "next";
import styles from "./index.module.scss";
import { getData, getWidgets } from "controller/generate";
import Header from "./components/header";
import Tool from "./components/tool";
import Render from "./components/render";
import Widgets from "./components/widgets";

interface HomeProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home: NextPage<HomeProps> = ({ title }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Tool />
        <Render />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getWidgets();
  console.log(data, 1);
  return {
    props: { a: 1 },
  };
}
