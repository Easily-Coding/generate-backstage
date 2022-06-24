import styles from "./render.module.scss";

function Render() {
  return (
    <div className={styles.render} id="render">
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="http://localhost:3001"
      ></iframe>
    </div>
  );
}

export default Render;
