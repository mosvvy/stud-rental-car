"use client";

import Link from "next/link";
import styles from "./page.module.css";
import SearchForm from "@/components/catalog/SearchForm/SearchForm";
import CarsList from "@/components/catalog/CarsList/CarsList";

export default function CatalogClient() {
  const handleLoadMore = () => {};

  return (
    <>
      <SearchForm />
      <CarsList cars={[]} />
      <button className="buttonMore" onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
}
