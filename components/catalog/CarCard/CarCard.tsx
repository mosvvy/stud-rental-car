import Car from "@/types/cars";
import styles from "./CarCard.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [, city, country] = car.address.split(", ");

  return (
    <div className={styles.carsItem} key={car.id}>
      <div className={styles.imgContainer}>
        <Image
          src={car.img}
          alt={car.id}
          width={276}
          height={268}
          className={styles.image}
        />
        <div className={clsx(styles.like)}>O</div>
      </div>
      <div className={styles.title}>
        <p>
          {car.brand} <span className="accent">{car.model}</span>, {car.year}
        </p>
        <p>&#36;{car.rentalPrice}</p>
      </div>
      <div className={styles.description}>
        <p>
          <span>{city}</span>
          <span>{country}</span>
          <span>{car.rentalCompany}</span>
        </p>
        <p>
          <span>{car.type}</span>
          {car.mileage} km
        </p>
      </div>
      <Link className="button" href={`/catalog/${car.id}`}>
        Read more
      </Link>
    </div>
  );
}
