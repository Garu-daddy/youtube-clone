import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SearchBar() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <button>
            <Image src="/YonTube_logo.png" width="90px" height="40px" />
          </button>
        </Link>

        <div className="align-middle">
          <input className={styles.input} type="text" />
          <button className={styles.inputBtn}>a</button>
        </div>

        <div>
          <span>asdf</span>
        </div>
      </header>
    </>
  );
}
