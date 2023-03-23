import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.navLogo}>
                    <div className={styles.logo}>
                        <a href="/">
                            <img
                                src="/assets/img/logo_welbex.svg"
                                alt="logo welbex"
                            />
                        </a>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navListItem}>
                                <a href="/">Услуги</a>
                            </li>
                            <li className={styles.navListItem}>
                                <a href="/">Виджеты</a>
                            </li>
                            <li className={styles.navListItem}>
                                <a href="/">Интеграции</a>
                            </li>
                            <li className={styles.navListItem}>
                                <a href="/">Кейсы</a>
                            </li>
                            <li className={styles.navListItem}>
                                <a href="/">Сертификаты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.phoneNumber}>+7 555 555-55-55</div>
                    <div className={styles.icons}>
                        <a href="/">
                            <img
                                src="/assets/img/headerIcons/telegram.svg"
                                alt="telegram"
                            />
                        </a>
                        <a href="/">
                            <img
                                src="/assets/img/headerIcons/viber.svg"
                                alt="viber"
                            />
                        </a>
                        <a href="/">
                            <img
                                src="/assets/img/headerIcons/whatsapp.svg"
                                alt="whatsApp"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.logoDescription}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </header>
    );
};

export default Header;
