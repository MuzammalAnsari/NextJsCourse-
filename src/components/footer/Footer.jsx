import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Muzammal Ansari</div>
            <div className={styles.text}>
                Muzammal Ansari © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;