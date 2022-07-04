import styles from "./widgets.module.scss";
import { generateAddpage } from "reducers/generate";
import { useAppDispatch } from "hooks/store";
import { Input } from "antd";
import { useState } from "react";

function Widgets() {
  const dispatch = useAppDispatch();
  const [pageName, setPageName] = useState<string>("");

  return (
    <div className={styles.widgets}>
      <button
        onClick={() => {
          dispatch(generateAddpage({ name: pageName }));
        }}
      >
        add pages
      </button>

      <Input
        placeholder="page name"
        value={pageName}
        onChange={(e) => setPageName(e.target.value)}
      />
    </div>
  );
}

export default Widgets;
