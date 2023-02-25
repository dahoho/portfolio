import Image from "next/image";
import profileImage from "public/about/profile.png";
import styles from "src/components/molecules/Profile/index.module.scss";

export const Profile = () => {
  return (
    <>
      <figure className={styles.picture}>
        <Image src={profileImage} alt="" />
      </figure>
      <div className={styles.info}>
        <p className={styles.text}>
          東京都在住 28歳
          <br />
          React,TypeScript学習中
        </p>
      </div>
    </>
  );
};
