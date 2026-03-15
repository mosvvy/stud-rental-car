"use client";

import Car from "@/types/cars";
import styles from "./CarCard.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { useFavorites } from "@/lib/store/fauvoritesCarsStore";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [, city, country] = car.address.split(", ");
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [isChecked, setIsChecked] = useState(favorites.includes(car.id));

  const handleLike = () => {
    if (isChecked) {
      removeFavorite(car.id);
    } else {
      addFavorite(car.id);
    }
    setIsChecked(!isChecked);
  };

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
        <div className={styles.like}>
          <button className={styles.likeBtn} onClick={handleLike}>
            <svg width={16} height={16}>
              <use
                href={
                  isChecked
                    ? "/images/sprite.svg#icon-like-filled"
                    : "/images/sprite.svg#icon-like-empty"
                }
              ></use>
            </svg>
          </button>
        </div>
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
