import styles from './Main.module.scss';
import Ball from '../../components/Ball';
import { useMediaQuery } from '../../services/useMediaQuery';

const Balls = () => {
    const isMobile = useMediaQuery('(max-width: 650px)');

    return (
        <>
            <Ball
                styles={{
                    width: '259px',
                    height: '259px',
                    left: isMobile ? '300px' : '602px',
                    top: isMobile ? '-70px' : '-154px',
                    background: '#833AB4',
                    opacity: '0.5',
                    filter: 'blur(196px)',
                }}
            />
            <Ball
                styles={{
                    width: isMobile ? '211px' : '311px',
                    height: isMobile ? '211px' : '311px',
                    left: isMobile ? '-151px' : '-302px',
                    top: isMobile ? '151px' : '251px',
                    background: '#961A1A',
                    opacity: '0.5',
                    filter: 'blur(196px)',
                }}
            />
            <Ball
                styles={{
                    width: isMobile ? '43px' : '83px',
                    height: isMobile ? '43px' : '83px',
                    borderRadius: '50%',
                    left: isMobile ? '5%' : '30%',
                    top: isMobile ? '88%' : '8%',
                    background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, 
                        rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, 
                        rgba(130, 25, 25, 0.248) 100%)`,
                    boxShadow: '3px 6px 27px -10px rgba(223, 125, 125, 0.25)',
                    filter: isMobile ? 'blur(8px)' : '',
                }}
            />
            <Ball
                styles={{
                    width: isMobile ? '45px' : '60px',
                    height: isMobile ? '45px' : '60px',
                    borderRadius: '50%',
                    left: isMobile ? '95%' : '60%',
                    top: isMobile ? '50%' : '-1%',
                    background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, 
                                rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, 
                                rgba(86, 24, 128, 0.232) 100%)`,
                    boxShadow: '3px 6px 27px -10px rgba(177, 118, 217, 0.25)',
                    filter: 'blur(5px)',
                }}
            />
            {!isMobile && (
                <Ball
                    styles={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        left: '58%',
                        top: '56%',
                        background: `radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, 
                                rgba(212, 93, 93, 0.248) 59.67%, 
                                rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%)`,
                        boxShadow:
                            '3px 6px 27px -10px rgba(223, 125, 125, 0.25)',
                        filter: 'blur(2.5px)',
                    }}
                />
            )}
        </>
    );
};

const Main = () => {
    const isMobile = useMediaQuery('(max-width: 650px)');

    return (
        <section className={styles.mainSection}>
            <div className={styles.title}>
                <h1>
                    Зарабатывайте больше <span>с WELBEX</span>
                </h1>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>
            {isMobile ? (
                <div className={styles.infoBlockMobile}>
                    <h2>
                        Вместе c <span>бесплатной</span>{' '}
                        <span>консультацией</span> мы дарим:
                    </h2>
                    <div className={styles.infoMobile}>
                        <div>
                            <h4>Skype аудит</h4>
                            <h4>Dashboard</h4>
                        </div>
                        <div>
                            <h4>30 виджетов</h4>
                            <h4>Месяц amocrm</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.infoBlock}>
                    <h2>
                        Вместе c <span>бесплатной</span>{' '}
                        <span>консультацией</span> мы дарим:
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
            )}
            <Balls />
        </section>
    );
};

export default Main;
