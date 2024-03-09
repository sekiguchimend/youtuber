import Link from "next/link";
import { client } from "../../libs/apis";
import { Head } from "../../compornents/Head";
import { Footer } from "../../compornents/footer";

export default function Home({ blog, categories }) {
  return (
    <div>
      <Head />
      <h1>開発中</h1>
      <Link href="/" passHref>
          <div>
            <h2>Home</h2>
          </div>
        </Link>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const blogData = await client.get({ endpoint: "blog" });
    const categoriesData = await client.get({ endpoint: "categories" });

    return {
      props: {
        blog: blogData.contents,
        categories: categoriesData.contents,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { blog: [], categories: [] } };
  }
};
