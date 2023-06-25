import styles from "./page.module.css";
import { DisplayFullData } from "./components/DisplayFullData";
import NameSearch from "./components/NameSearch";
import { FilterSearch } from "./components/FilterSearch";
import { SortPageSkipLimit } from "./components/SortPageSkipLimit";

export default function Home() {
  return (
    <main className={styles.main}>
      <DisplayFullData />
      <hr />
      <NameSearch />
      <hr />
      <FilterSearch />
      <hr />
      <SortPageSkipLimit />
    </main>
  );
}
