import Image from "next/image";
import styles from "./page.module.css";
import { fetchCarById } from "@/lib/api";
import BookForm from "@/components/car/BookForm/BookForm";

interface CarPageProps {
  params: Promise<{ id: string }>;
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  const car = await fetchCarById(id);

  const [, city, country] = car.address.split(", ");

  // const handleSubmit = () => {};

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.imgContainer}>
            <Image
              src={car.img}
              alt={car.id}
              width={640}
              height={512}
              className={styles.image}
            />
          </div>
          <BookForm />
          {/* <BookForm onSubmit={handleSubmit} /> */}
        </div>

        <div className={styles.column}>
          <div className={styles.mainInfo}>
            <h1 className={styles.title}>
              {car.brand} {car.model}, {car.year}
              <span className={styles.id}>Id: {car.id}</span>
            </h1>
            <div className={styles.wrapper}>
              <div className={styles.location}>
                LOC {city}, {country}
              </div>
              <div className={styles.mileage}>Mileage: {car.mileage} km</div>
              <div className={styles.price}>${car.rentalPrice}</div>
            </div>
            <p className={styles.description}>{car.description}</p>
          </div>

          <div className={styles.details}>
            <div>
              <h2 className={styles.subtitle}>Rental Conditions:</h2>
              <ul className={styles.list}>
                {car.rentalConditions.map((condition) => (
                  <li key={condition} className={styles.listItem}>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={styles.subtitle}>Car Specifications:</h2>
              <p className={styles.specification}>
                <svg className={styles.specIcon} width={16} height={16}>
                  <use href="/images/sprite.svg#icon-calendar"></use>
                </svg>
                Year: {car.year}
              </p>
              <p className={styles.specification}>
                <svg className={styles.specIcon} width={16} height={16}>
                  <use href="/images/sprite.svg#icon-car"></use>
                </svg>
                Type: {car.type}
              </p>
              <p className={styles.specification}>
                <svg className={styles.specIcon} width={16} height={16}>
                  <use href="/images/sprite.svg#icon-fuel-pump"></use>
                </svg>
                Fuel Consumption: {car.fuelConsumption}
              </p>
              <p className={styles.specification}>
                <svg className={styles.specIcon} width={16} height={16}>
                  <use href="/images/sprite.svg#icon-gear"></use>
                </svg>
                Engine Size: {car.engineSize}
              </p>
            </div>

            <div>
              <h2 className={styles.subtitle}>
                Accessories and functionalities:
              </h2>
              <ul className={styles.list}>
                {car.accessories.map((acc) => (
                  <li key={acc} className={styles.listItem}>
                    {acc}
                  </li>
                ))}
                {car.functionalities.map((func) => (
                  <li key={func} className={styles.listItem}>
                    {func}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
