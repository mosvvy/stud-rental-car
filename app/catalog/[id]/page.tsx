import Image from "next/image";
import styles from "./page.module.css";

interface CarPageProps {
  params: Promise<{ id: string }>;
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  const car = {
    id: "11a3ab35-07b8-4336-b06b-602cdc309f2c",
    year: 2008,
    brand: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
    description:
      "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
    fuelConsumption: "10.5",
    engineSize: "3.6L V6",
    accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
    functionalities: [
      "Power liftgate",
      "Remote start",
      "Blind-spot monitoring",
    ],
    rentalPrice: "40",
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    rentalConditions: [
      "Minimum age: 25",
      "Valid driver's license",
      "Security deposit required",
    ],
    mileage: 5858,
  };

  const [, city, country] = car.address.split(", ");

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
          FORM
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
              <p className={styles.specification}>O Year: {car.year}</p>
              <p className={styles.specification}>O Type: {car.type}</p>
              <p className={styles.specification}>
                O Fuel Consumption: {car.fuelConsumption}
              </p>
              <p className={styles.specification}>
                O Engine Size: {car.engineSize}
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
