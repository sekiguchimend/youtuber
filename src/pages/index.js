import Link from "next/link";
import { client } from "../../libs/apis";
import styles from "../../styles/Home.module.scss";
import { Header } from "../../compornents/Head";
import { Footer } from "../../compornents/footer";
import Head from "next/head"; // SEO用のHead

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return { props: { blog: data.contents } };
};

export default function Home({ blog }) {
  return (
    <>
     <Head>
        {/* ページタイトル */}
        <title>AIエンジニア</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
     crossorigin="anonymous"></script>        {/* ページの説明 */}
        <meta name="description" content="このページの説明文。具体的でユーザーの興味を引く内容にする。" />
        
        {/* ビューポートの設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 文字エンコーディング */}
        <meta charSet="UTF-8" />
        
        {/* 検索エンジンにインデックスされないようにするには（必要に応じて） */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        
        {/* Open Graph プロトコル（ソーシャルメディアでの共有時に使用される） */}
        <meta property="og:title" content="AIエンジニア" />
        <meta property="og:description" content="AIエンジニアBlogではAIをフル活用して誰でも楽しくサイトやアプリを作る方法を載せています。
        プログラミング初心者に向けた有益な情報も発信してます。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youtubernews.vercel.app/" />
        <meta property="og:image" content="ai.png" />
        
        {/* Twitter カード（ソーシャルメディアでの共有時に使用される） */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AIエンジニアBlog" />
        <meta name="twitter:description" content="AIエンジニアBlogではAIをフル活用して誰でも楽しくサイトやアプリを作る方法を載せています。" />
        <meta name="twitter:image" content="https://youtubernews.vercel.app/ai.png" />
        <meta name="twitter:site" content="@SekiguchiS39523" />
        
        {/* favicon の設定 */}
        <link rel="icon" href="/ai.png" />
        <link rel="apple-touch-icon" href="/ai.png" />
        
        {/* キャノニカル URL（重複コンテンツを避けるため） */}
        <link rel="canonical" href="https://youtubernews.vercel.app/" />
        
        {/* 他の必要なメタタグ */}
        <meta name="author" content="AIエンジニア" />
        <meta name="keywords" content="AI, プログラミング, エンジニア, ..." />
        
        {/* その他の外部リソースやスクリプトのリンク */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        
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
    <div className={styles.main}>
      <Head />
      <div className={styles.blogContainer}>
        {blog.map((blogItem) => (
          <div key={blogItem.id} className={styles.blogItem}>
            <Link href={`/blog/${blogItem.id}`}>
              {/* サムネイル画像 */}
              {blogItem.image && (
                <img src={blogItem.image.url} alt={blogItem.title} />
              )}
              {/* タイトル */}
              <div className={styles.title}>{blogItem.title}</div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
}
