import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        Copyright © <sup> 2023 </sup> Fantasy Gold. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
