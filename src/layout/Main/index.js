import styles from './Main.module.scss';
import Ball from '../../components/Ball';

const Main = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.title}>
                <h1>
                    Зарабатывайте больше <span>с WELBEX</span>
                </h1>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className={styles.infoBlock}>
                <h2>
                    Вместе c <span>бесплатной</span> <span>консультацией</span>{' '}
                    мы дарим:
                </h2>
                <div className={styles.info}>
                    <div className={styles.column}>
                        <div>
                            <h4>Виджеты</h4>
                            <p>30 готовых решений</p>
                        </div>
                        <div>
                            <h4>Skype Аудит</h4>
                            <p>отдела продаж и CRM системы</p>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div>
                            <h4>Dashboard</h4>
                            <p>c показателями вашего бизнеса</p>
                        </div>
                        <div>
                            <h4>35 дней</h4>
                            <p>использования CRM</p>
                        </div>
                    </div>
                </div>
                <div className={styles.btn}>
                    <a href="/">Получить консультацию</a>
                </div>
            </div>
            <Ball
                styles={{
                    width: '259px',
                    height: '259px',
                    left: '602px',
                    top: '-154px',
                    background: '#833AB4',
                    opacity: '0.5',
                    filter: 'blur(196px)',
                }}
            />
            <Ball
                styles={{
                    width: '311px',
                    height: '311px',
                    left: '-102px',
                    top: '251px',
                    background: '#961A1A',
                    opacity: '0.5',
                    filter: 'blur(196px)',
                }}
            />
        </section>
    );
};

export default Main;
