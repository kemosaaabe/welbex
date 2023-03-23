import styles from './Main.module.scss';
import Ball from '../../components/Ball';

const Main = () => {
    return (
        <section className={styles.mainSection}>
            <div className="title">
                <h1>
                    Зарабатывайте больше <span>с WELBEX</span>
                </h1>
                <p>Развиваем и контролируем продажи за вас</p>
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
