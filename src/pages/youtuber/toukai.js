import { Header } from "../../../compornents/Head"; // コンポーネントのパスを修正
import { Footer } from "../../../compornents/footer";
import Head from "next/head"; // SEO用のHead

export default function Profile() {
  return (
    <>
    <Head>
    <title>AIエンジニアのプロフィール</title>
    <meta name="google-adsense-account" content="ca-pub-5463240386609584"></meta>
    </Head>
      <Header />
      
      <div className="profile">
        <div className="field">
          <h2>名前:</h2>
          <p>AIエンジニア</p>
        </div>
        <div className="field">
          <h2>経歴:</h2>
          <p>chat-gptに衝撃を受けてAIでサイトやアプリを作り始めそこからプログラミングを学び始めた。
          </p>
        </div>
        <div className="field">
          <h2>スキル:</h2>
          <p>動画編集や3Dも作れます。使えるプログラミング言語はNext.jsとC#,javaでReactも使えます。</p>
        </div>
        <div className="field">
          <h2>趣味:</h2>
          <p>ギターやウォーキング。</p>
        </div>
      
      </div>
      <Footer />
      <style jsx>{`
        .profile {
          margin: 0 auto;
          width: 70%;
          padding: 20px;
        }
        .field {
          margin-top: 2em;
        }
       
        h2 {
          text-align: center;
          color: #666;
          font-size: 1.5em;
          margin-bottom: 0.5em;
        }
        p {
          text-align: center;
          color: #999;
          font-size: 1.2em;
          margin-bottom: 1em;
        }
      `}</style>
    </>
  );
}
