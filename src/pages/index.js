import Link from "next/link";
import { client } from "../../libs/apis";
import styles from "../../styles/Home.module.scss";
import { Head } from "../../compornents/Head";
import { Footer } from "../../compornents/footer";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return { props: { blog: data.contents } };
};

export default function Home({ blog }) {
  return (
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
  );
}
