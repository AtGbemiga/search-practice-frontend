import Image from "next/image";
import styles from "./page.module.css";
import { DisplayFullData } from "./components/DisplayFullData";
import NameSearch from "./components/NameSearch";
import { FilterSearch } from "./components/FilterSearch";

export default function Home() {
  return (
    <main className={styles.main}>
      <DisplayFullData />
      <hr />
      <NameSearch />
      <hr />
      <FilterSearch />
    </main>
  );
}
