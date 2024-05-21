import Styles from './footer.module.css';

export function Footer() {
    return (
        <>
            <div className={Styles.footer}>
                <div className={Styles.insta}>
                    <h3 className={Styles.h3}>Twitter</h3>
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>投稿した記事についての投稿をしています。</p>
                    <img src='' />
                </div>
                <div className={Styles.employe}>
                    <h3 className={Styles.h3}>Insta</h3>
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>
                        開発中のアプリなどについて投稿しています。
                        面白いサービスを作ったり
                        してるので興味があれば見てください。
                    </p>
                    <img src='' />
                </div>
                <div className={Styles.pwa}>
                    <h3 className={Styles.h3}>アプリについて</h3>
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>
                        当サイトはアプリ化をすることができます。
                        右上の三点を押してインストールしてください。
                    </p>
                </div>
            </div>
        </>
    );
}