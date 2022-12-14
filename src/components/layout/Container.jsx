import styles from "./container.module.css";

const Container = (props) => {
  return <div className={styles.fixed}>{props.children}</div>;
};

export default Container;
