import { QueryClient } from "@tanstack/react-query";
import styles from "./page.module.css";
import CatalogClient from "./pageClient";
import { fetchBrands, fetchCars } from "@/lib/api";

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      "cars",
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    queryFn: () =>
      fetchCars(1, undefined, undefined, undefined, undefined, undefined),
  });

  const brands = await fetchBrands();

  return (
    <main>
      <h1 className="visually-hidden">Car catalog</h1>
      <CatalogClient brands={brands} />
    </main>
  );
}
