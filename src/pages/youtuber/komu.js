import { Head } from "../../../compornents/Head"; // コンポーネントのパスを修正
import { Footer } from "../../../compornents/footer";
import Link from "next/link"; // Linkをインポートする

 export default function Komu() {
  return (
    <>
      <Head />
      <h1>開発中</h1>
     <Footer />
     <Link href="/" passHref>
          <div>
            <h2>Home</h2>
          </div>
        </Link>
    </>
  );
}

