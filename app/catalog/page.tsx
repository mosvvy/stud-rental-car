import styles from "./page.module.css";
import CatalogClient from "./pageClient";

export default function Catalog() {
  return (
    <main>
      <h1 className="visually-hidden">Car catalog</h1>
      <CatalogClient />
    </main>
  );
}
