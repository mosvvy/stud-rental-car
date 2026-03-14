"use client";

import Car from "@/types/cars";
import styles from "./CarsList.module.css";
import CarCard from "../CarCard/CarCard";
import { useState } from "react";

interface CarsListProps {
  cars: Car[];
}

export default function CarsList({ cars }: CarsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ul className={styles.carsList}>
      {cars.map((car) => (
        <li className={styles.carsItem} key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}
