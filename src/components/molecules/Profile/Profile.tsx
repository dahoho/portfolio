import Image from "next/image";
import profileImage from "public/about/profile.png";
import styles from "src/components/molecules/Profile/index.module.scss";

export const Profile = () => {
  return (
    <>
      <figure className={styles.picture}>
        <Image src={profileImage} alt="" priority={true} />
      </figure>
      <div className={styles.info}>
        <p className={styles.text}>
          東京都在住 29歳
          <br />
          普段はReact,TypeScript中心に触ってます。
        </p>
      </div>
    </>
  );
};
