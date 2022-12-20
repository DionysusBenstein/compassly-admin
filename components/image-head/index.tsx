import styles from "../../styles/components/ImageHead.module.scss";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface LinkInterface {
  name: string;
  link: string;
  active?: boolean;
}

export const ImageHead = ({ links }: { links?: LinkInterface[] }) => {
  const router = useRouter();

  return (
    <div className={styles.imageHead}>
      {links && (
        <div className={styles.buttons}>
          {links?.map((el: LinkInterface, key: number) => (
            <Link key={key} href={el.link}>
              <div
                className={`${styles.buttonLink} ${
                  el.active ? styles.active : ""
                }`}
              >
                {el.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
