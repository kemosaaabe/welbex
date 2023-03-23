import styles from './Main.module.scss';
import Ball from '../../components/Ball';

const Balls = () => {
    return (
        <>
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
            <Ball
                styles={{
                    width: '83px',
                    height: '83px',
                    borderRadius: '50%',
                    left: '34%',
                    top: '8%',
                    background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, 
                        rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, 
                        rgba(130, 25, 25, 0.248) 100%)`,
                    boxShadow: '3px 6px 27px -10px rgba(223, 125, 125, 0.25)',
                }}
            />
            <Ball
                styles={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    left: '60%',
                    top: '-1%',
                    background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, 
                                rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, 
                                rgba(86, 24, 128, 0.232) 100%)`,
                    boxShadow: '3px 6px 27px -10px rgba(177, 118, 217, 0.25)',
                    filter: 'blur(5px)',
                }}
            />
            <Ball
                styles={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    left: '60%',
                    top: '-1%',
                    background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, 
                                rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, 
                                rgba(86, 24, 128, 0.232) 100%)`,
                    boxShadow: '3px 6px 27px -10px rgba(177, 118, 217, 0.25)',
                    filter: 'blur(5px)',
                }}
            />
            <Ball
                styles={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    left: '60%',
                    top: '55%',
                    background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, 
                                rgba(212, 93, 93, 0.248) 59.67%, 
                                rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%)`,
                    boxShadow: '3px 6px 27px -10px rgba(223, 125, 125, 0.25)',
                    filter: 'blur(2.5px)',
                }}
            />
        </>
    );
};

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
            <Balls />
        </section>
    );
};

export default Main;
