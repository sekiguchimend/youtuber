import Link from "next/link";
import { Header } from "../../compornents/Head"; // コンポーネントのパスを修正
import { Footer } from "../../compornents/footer";
import Image from 'next/image';
import Head from "next/head"; // SEO用のHead

export default function SalonIntroduction() {
  return (
    <>
     <Head>
        {/* ページタイトル */}
        <title>My Awesome Page - 具体的なテーマに関連するキーワード</title>
        
        {/* ページの説明 */}
        <meta name="description" content="このページの説明文。具体的でユーザーの興味を引く内容にする。" />
        
        {/* ビューポートの設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 文字エンコーディング */}
        <meta charSet="UTF-8" />
        
        {/* 検索エンジンにインデックスされないようにするには（必要に応じて） */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        
        {/* Open Graph プロトコル（ソーシャルメディアでの共有時に使用される） */}
        <meta property="og:title" content="My Awesome Page - 具体的なテーマに関連するキーワード" />
        <meta property="og:description" content="このページの説明文。具体的でユーザーの興味を引く内容にする。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/mypage" />
        <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
        
        {/* Twitter カード（ソーシャルメディアでの共有時に使用される） */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Awesome Page - 具体的なテーマに関連するキーワード" />
        <meta name="twitter:description" content="このページの説明文。具体的でユーザーの興味を引く内容にする。" />
        <meta name="twitter:image" content="https://www.example.com/images/twitter-image.jpg" />
        <meta name="twitter:site" content="@TwitterHandle" />
        
        {/* favicon の設定 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* キャノニカル URL（重複コンテンツを避けるため） */}
        <link rel="canonical" href="https://www.example.com/mypage" />
        
        {/* 他の必要なメタタグ */}
        <meta name="author" content="サイト運営者の名前" />
        <meta name="keywords" content="キーワード1, キーワード2, キーワード3, ..." />
        
        {/* その他の外部リソースやスクリプトのリンク */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
        
        {/* プラグインやサードパーティのメタタグ（例：Google Analytics） */}
        {/* Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXXXX-X');
          `}
        </script> */}
      </Head>
      <Header />
      <div className="container">
        <header className="hero">
         
          <h1>AI大学に入りませんか？</h1>
          <p>下のjoinを押して一度見学しにきてください。</p>
          <Link href="/join" passHref>
            <button className="join-button">Join Now</button>
          </Link>
        </header>

        <section className="about">
          <h2>AI大学とは？</h2>
          <p>AI大学とはAIだけでパソコン初心者がサイトやアプリを作れるようになるオンラインスクールです。プログラミングの知識もある程度つくので楽しく簡単にITに触れることができます。</p>
        </section>

        <section className="features">
          <h2>具体的に何をしてるの？</h2>
          <div className="feature-grid">
            <div className="feature">
              <Image src="/kyouzai.png" alt="Feature 1" width={300} height={200} />
              <h3>学習速度に合わせた教材</h3>
              <p>まずは動画を見て学んでもらいます。一人一人の学習速度に合わせて次の単元の動画に行くかどうかは変わります。</p>
            </div>
            <div className="feature">
              <Image src="/situmon.png" alt="Feature 2" width={300} height={200} />
              <h3>講師への個別質問</h3>
              <p>動画を見てわからなかったところや上手くいかなかった時は講師への質問ができます。24時間対応で何回でも質問できます。</p>
            </div>
            <div className="feature">
              <Image src="/chat.png" alt="Feature 3" width={300} height={200} />
              <h3>チャットでの会話</h3>
              <p>共同のチャットで自分が作ったサイトについて紹介したり他の人のサイトやアプリの進捗報告などを見ることでモチベーションがあがります。</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>料金プラン</h2>
          <div className="testimonial">
            <Image src="/money.png" alt="Testimonial 1" width={100} height={100} className="testimonial-img" />
            <p>基本的月額な料金</p>
            <p>20000円</p>
          </div>
          <div className="testimonial">
            <Image src="/money2.png" alt="Testimonial 2" width={100} height={100} className="testimonial-img" />
            <p>上のプランプラス講師といつでもzoom会議をすることができる</p>
            <p>30000円</p>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .hero {
          text-align: center;
          margin-bottom: 40px;
        }
        .hero h1 {
          font-size: 2.5em;
          color: #333;
          margin-top: 20px;
        }
        .hero p {
          font-size: 1.2em;
          color: #666;
          margin-top: 10px;
        }
        .join-button {
          background-color: #0070f3;
          color: #fff;
          padding: 10px 20px;
          font-size: 1.2em;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        }
        .about, .features, .testimonials {
          margin-bottom: 40px;
        }
        .about h2, .features h2, .testimonials h2 {
          font-size: 2em;
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }
        .about p, .features p {
          font-size: 1.2em;
          color: #666;
          text-align: center;
        }
        .feature-grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .feature {
          text-align: center;
          margin: 20px;
        }
        .feature h3 {
          font-size: 1.5em;
          color: #333;
          margin-top: 10px;
        }
        .feature p {
          font-size: 1em;
          color: #666;
          margin-top: 10px;
        }
        .testimonials {
          text-align: center;
        }
        .testimonial {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px;
          text-align: left;
        }
        .testimonial p {
          margin-left: 20px;
          font-size: 1em;
          color: #666;
        }
        .testimonial-img {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
