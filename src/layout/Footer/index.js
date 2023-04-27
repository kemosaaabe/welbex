import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerRow}>
                <div className={styles.column}>
                    <h5>О компании</h5>
                    <ul>
                        <li>
                            <a href="/">Партнёрская программа</a>
                        </li>
                        <li>
                            <a href="/">Вакансии</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h5>Меню</h5>
                    <div className={styles.menu}>
                        <ul>
                            <li>
                                <a href="/">Расчёт стоимости</a>
                            </li>
                            <li>
                                <a href="/">Услуги</a>
                            </li>
                            <li>
                                <a href="/">Виджеты</a>
                            </li>
                            <li>
                                <a href="/">Интеграции</a>
                            </li>
                            <li>
                                <a href="/">Наши клиенты</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/">Кейсы</a>
                            </li>
                            <li>
                                <a href="/">Благодарственные письма</a>
                            </li>
                            <li>
                                <a href="/">Сертификаты</a>
                            </li>
                            <li>
                                <a href="/">Блог на Youtube</a>
                            </li>
                            <li>
                                <a href="/">Вопрос / Ответ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>
                    <h5>Контакты</h5>
                    <div className={styles.contacts}>
                        <div className={styles.phoneNumber}>
                            +7 555 555-55-55
                        </div>
                        <div className={styles.icons}>
                            <a href="/">
                                <img
                                    src="assets/img/headerIcons/telegram.svg"
                                    alt="telegram"
                                />
                            </a>
                            <a href="/">
                                <img
                                    src="assets/img/headerIcons/viber.svg"
                                    alt="viber"
                                />
                            </a>
                            <a href="/">
                                <img
                                    src="assets/img/headerIcons/whatsapp.svg"
                                    alt="whatsApp"
                                />
                            </a>
                        </div>
                        <div className={styles.address}>
                            Москва, Путевой проезд 3с1, к 902
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <p>
                    <a href="/">Политика конфиденциальности</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
