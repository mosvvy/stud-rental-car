import Car from "@/types/cars";
import styles from "./CarsList.module.css";

interface CarsListProps {
  cars: Car[];
}

export default function CarsList({ cars }: CarsListProps) {
  return (
    <ul className={styles.carsList}>
      <li className={styles.carsItem}>CarCard</li>
    </ul>
  );
}
