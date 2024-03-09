import Styles from './footer.module.css'; // ヘッダーのスタイルシートのパスを正確に指定してください

export function Footer(){
    return(
<>
<div className={Styles.footer}>
<div className={Styles.twitter}>
<h3 className={Styles.h3}>ライター募集</h3>
<div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div><p>webライターを募集しています。未経験の方でもかまいません。
    先着五名までなので早めにご連絡ください。五人の中のどの
    ユーチューバーの方の記事を書きたいかも先着順です。報酬は
    収益の80%ほどをお渡しします。当サイトはseoに強いだけでなく
    他のユーチューバーの記事からの流入も多いのでpv数が稼ぎやすく
    なっています。
</p>
</div>
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
<p>開発中のアプリなどについて投稿しています。面白いサービスを作ったり
    してるので興味があれば見てください。
</p>
<img src='' />

</div>
<div className={Styles.pwa}>
<h3 className={Styles.h3}>アプリについて</h3>
<div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>    <p>当サイトはアプリ化をすることができます。アプリ化をすることで
        スマホやパソコンのホーム画面にアプリのように表示しておくことや
        記事に関する通知なども受け取ることができます。
    </p>
</div>
</div>

</>
    );
}