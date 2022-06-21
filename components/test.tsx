import styles from "./test.module.scss";

interface TestProps {
  children: JSX.Element;
}
function Test({ children }: TestProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Test;
