import Styles from './Head.module.css';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

export function Header() {
  return (
    <>
      <div className={Styles.title}>
        <h1 className={Styles.inlineBlock}>AIエンジニア</h1>
        <p className={Styles.inlineBlock}>ai大学に関する情報を載せます</p>
      </div>
      <header className={Styles.header}>
        {/* ヘッダーのコンテンツ */}
        <div className={Styles.socialMediaIcons}>
          <a href="https://x.com/SekiguchiS39523" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={Styles.twitterIcon} />
          </a>
          <a href="https://www.instagram.com/shiyun1306/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={Styles.instagramIcon} />
          </a>
          <a href="https://www.tiktok.com/@your_tiktok_handle" target="_blank" rel="noopener noreferrer">
            <FaTiktok className={Styles.tiktokIcon} />
          </a>
        </div>
        <div className={Styles.imageContainerWrapper}>
          <div className={Styles.imageContainer}>
            <Link href="/allCategories" passHref>
              <div>
                <img src="/app.png" alt="Image 1" />
                <p>AI大学</p>
              </div>
            </Link>
          </div>
          <div className={Styles.imageContainer}>
            <Link href="/" passHref>
              <div>
                <img src="/home.png" alt="Image 2" />
                <p>ホーム</p>
              </div>
            </Link>
          </div>
          <div className={Styles.imageContainer}>
            <Link href="/youtuber/toukai" passHref>
              <div>
                <img src="/plo.png" alt="Image 3" />
                <p>自分</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
