import Styles from './Head.module.css'; // ヘッダーのスタイルシートのパスを正確に指定してください
import Link from 'next/link';

export function Head() {
  return (
    <>
     <div className={Styles.title}>
        <h1 className={Styles.inlineBlock}>Youtube News</h1>
        <p className={Styles.inlineBlock}>ユーチューブニュース</p>
      </div>
    <header className={Styles.header}>
      {/* ヘッダーのコンテンツ */}
      
      <div className={Styles.imageContainer}>
        <Link href="/allCategories" passHref>
          <div>
            <img src="/hikaru.png" alt="Image 1" />
            <p>ヒカル</p>
          </div>
        </Link>
      </div>
      <hr />
      <div className={Styles.imageContainer}>
        <Link href="/youtuber/komu" passHref>
          <div>
            <img src="/komu.png" alt="Image 2" />
            <p>コムドット</p>
          </div>
        </Link>
      </div>
      <hr />
      <div className={Styles.imageContainer}>
        <Link href="/youtuber/toukai" passHref>
          <div>
            <img src="/toukai.png" alt="Image 3" />
            <p>東海オンエア</p>
          </div>
        </Link>
      </div>
      <hr />
      <div className={Styles.imageContainer}>
        <Link href="/youtuber/ega" passHref>
          <div>
            <img src="/ega.png" alt="Image 4" />
            <p>エガちゃん</p>
          </div>
        </Link>
      </div>
      <hr />
      <div className={Styles.imageContainer}>
        <Link href="/youtuber/mikuru" passHref>
          <div>
            <img src="/mikuru.png" alt="Image 5" />
            <p>朝倉未来</p>
          </div>
        </Link>
      </div>
    </header>
    </>
  );
}
