import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlayCircle,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <button className={styles.HomeBtn}>
            <FontAwesomeIcon
              icon={faPlayCircle}
              style={{
                fontSize: 16,
                color: "#FF0000",
                marginRight: 3,
                backgroundColor: "white",
                borderRadius: 50,
              }}
            />
            YonTube
          </button>
        </Link>

        <div className={styles.searchBar}>
          <input className={styles.input} type="text" />
          <button className={styles.inputBtn}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontWeight: 10, fontSize: 10, color: "white" }}
            />
          </button>
        </div>

        <div>
          <span>asdf</span>
        </div>
      </header>
    </>
  );
}
