import styles from "../../styles/components/NextButton.module.scss";

export const NextButton = ({
  title,
  click,
}: {
  title: string;
  click: () => void;
}) => {
  return (
    <div className={styles.nextButton} onClick={click}>
      <div className={styles.icon}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5.5C9.52023 5.5 9.5 6.02023 9.5 6.5V9.5H6.5C6.02023 9.5 5.5 9.52023 5.5 10C5.5 10.4798 6.02023 10.5 6.5 10.5H9.5V13.5C9.5 13.9798 9.52023 14.5 10 14.5C10.4798 14.5 10.5 13.9798 10.5 13.5V10.5H13.5C13.9798 10.5 14.5 10.4798 14.5 10C14.5 9.52023 13.9798 9.5 13.5 9.5H10.5V6.5C10.5 6.02023 10.4798 5.5 10 5.5Z"
            fill="#8A92A6"
          />
        </svg>
      </div>

      <span>{title}</span>
    </div>
  );
};
