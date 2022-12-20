import { useRouter } from "next/dist/client/router";
import styles from "../styles/modals/AddDomain.module.scss";

export const AddDomain = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const router = useRouter(),
    goToAddManuali = (e: any) => {
      e.preventDefault();
      onClose();
      router.push("/program-library/create/domain");
    };

  if (!show) return null;

  return (
    <>
      <div className={styles.modalBack}></div>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button className={styles.closeModal} onClick={onClose}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7098 0.290182C12.9945 -0.425185 12.1886 0.320349 11.4732 1.03572L7 5.50893L2.52679 1.03572C1.81142 0.320349 1.00555 -0.425187 0.290182 0.290181C-0.425186 1.00555 0.320349 1.81142 1.03572 2.52679L5.50893 7L1.03572 11.4732C0.320349 12.1886 -0.425187 12.9944 0.290181 13.7098C1.00555 14.4252 1.81142 13.6796 2.52679 12.9643L7 8.49107L11.4732 12.9643C12.1886 13.6796 12.9945 14.4252 13.7098 13.7098C14.4252 12.9945 13.6797 12.1886 12.9643 11.4732L8.49107 7L12.9643 2.52679C13.6797 1.81142 14.4252 1.00555 13.7098 0.290182Z"
                fill="#8A92A6"
              />
            </svg>
          </button>
        </div>
        <div className={styles.modalData}>
          <p className={styles.text}>Select an option to add new domain.</p>
          <div className={styles.buttons}>
            <button className={styles.addButton}>Upload document</button>
            <button className={styles.addButton} onClick={goToAddManuali}>
              Add manually
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
