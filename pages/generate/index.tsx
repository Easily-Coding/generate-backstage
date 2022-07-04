import type { GetStaticProps, NextPage } from "next";
import styles from "./index.module.scss";
import { getComponentNames } from "controller/generate";
import Header from "components/generate_page/header";
import Tool from "components/generate_page/tool";
import Render from "components/generate_page/render";
import Widgets from "components/generate_page/widgets";

interface HomeProps {
  componentNames: Array<string>;
}

const Home: NextPage<HomeProps> = ({ componentNames }: HomeProps) => {
 

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Tool />
        <Render />
        <Widgets  />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const names: Array<string> = await getComponentNames();
  return {
    props: { componentNames: names },
  };
};
