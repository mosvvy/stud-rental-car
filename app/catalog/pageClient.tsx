"use client";

import styles from "./page.module.css";
import SearchForm from "@/components/catalog/SearchForm/SearchForm";
import CarsList from "@/components/catalog/CarsList/CarsList";
import { keepPreviousData, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api";
import { useState } from "react";
import Car from "@/types/cars";

export default function CatalogClient() {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [brand, setBrand] = useState<string | undefined>(undefined);
  const [rentalPrice, setRentalPrice] = useState<string | undefined>(undefined);
  const [minMileage, setMinMileage] = useState<string | undefined>(undefined);
  const [maxMileage, setMaxMileage] = useState<string | undefined>(undefined);
  const [limit, setLimit] = useState<number | undefined>(undefined);

  const LOAD_STEP = 4;

  const { data } = useQuery({
    queryKey: [
      "cars",
      currentPage,
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
      limit,
    ],
    queryFn: () =>
      fetchCars(
        1,
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit?.toString(),
      ),
    placeholderData: keepPreviousData,
  });

  const handleSearch = () => {
    setLimit(undefined);
  };
  const handleLoadMore = () => setLimit((prev = 12) => prev + LOAD_STEP);

  const total = data?.totalCars ?? 0;
  const hasMore = (limit ?? 0) < total;

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {data && data.cars.length > 0 ? (
        <CarsList cars={data.cars} />
      ) : (
        <p>No cars found</p>
      )}
      {hasMore && (
        <button
          className={`button-more ${styles.button}`}
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </>
  );
}
