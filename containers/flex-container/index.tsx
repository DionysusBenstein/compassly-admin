import styles from "../../styles/containers/FlexContainer.module.scss";

export const FlexContainer = ({ children }: { children: any }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};
