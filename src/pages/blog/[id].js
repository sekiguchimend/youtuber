// blog/[id].js

import { client } from "../../../libs/apis";
import styles from "./Lib.module.css";
import { Head } from "../../../compornents/Head"; // コンポーネントのパスを修正
import Link from "next/link";
import ReactHtmlParser from "react-html-parser"; // ReactHtmlParser のインポート
import {Footer} from "../../../compornents/footer";
// 日付を日本語表記に変換する関数
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long", // 月の長い形式（例：1月）
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("ja-JP", options);
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    return {
        props: {
            blog: data,
        },
    };
};

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default function BlogId({ blog }) {
    return (
        <>
        <Head />
        <div className={styles.container}>
          
            <main className={styles.main}>               
                <div className={styles.post}>
                <p className={styles.publishedAt}>公開日：{formatDate(blog.publishedAt)}</p>
                <h3 className={styles.customTitle}>{blog.title}</h3>
                <img className={styles.image} src={blog.image.url} alt={blog.title} />

                    <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
                </div>
            </main>
            
            <div className={styles.tate}>
                <aside className={styles.profile}>
                    <img src="" />
                    <h4>峻矢</h4>
                    <div className={styles.hrContainer}>
                        <hr className={styles.hr} />
                    </div>
                    <p>ブログ始めた</p>
                    {/* ここにプロフィールの内容を表示 */}
                </aside>
                
                <div className={styles.matome}>
                    <Link href="/" legacyBehavior>
                        <a>まとめ</a>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
