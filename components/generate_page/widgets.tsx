import styles from "./widgets.module.scss";
import { useAppSelector } from "hooks/store";
import { Select } from "antd";
const { Option } = Select;

function Widgets() {
  const componentNames = useAppSelector((state) => state.componentNames);

  const changeCurrentComponent = (val: string) => {
    console.log(val, "val");
  };
  return (
    <div className={styles.widgets}>
      <div className={styles.nav}>
        {componentNames.length !== 0 && (
          <Select
            className={styles.select}
            defaultValue={componentNames[0]}
            onChange={changeCurrentComponent}
          >
            {componentNames.map((name) => (
              <Option key={name} value={name}>
                {name}
              </Option>
            ))}
          </Select>
        )}
      </div>
    </div>
  );
}

export default Widgets;
