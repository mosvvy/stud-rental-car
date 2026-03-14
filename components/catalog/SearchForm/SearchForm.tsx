import { Field, Form, Formik } from "formik";
import styles from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: () => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const brands = [
    "Aston Martin",
    "Audi",
    "BMW",
    "Bentley",
    "Buick",
    "Chevrolet",
    "Chrysler",
    "GMC",
    "HUMMER",
    "Hyundai",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lincoln",
    "MINI",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Pontiac",
    "Subaru",
    "Volvo",
  ];

  const prices = [0, 10, 20];

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ brand: "", price: "", milFrom: "", milTo: "" }}
    >
      <Form className={styles.from}>
        <div className={styles.wrapper}>
          <label className={styles.label}>Car brand</label>
          <Field
            className={styles.select}
            as="select"
            id="category"
            name="category"
          >
            <option value="">Choose a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>

        <div className={styles.wrapper}>
          <label className={styles.label}>Price/ 1 hour</label>
          <Field className={styles.select} as="select" id="price" name="price">
            <option value="">Choose a price</option>
            {prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </Field>
        </div>

        <div className={styles.wrapper}>
          <label className={styles.label}>Сar mileage / km</label>
          <div className={styles.inputDouble}>
            <Field
              className={styles.numberFrom}
              type="number"
              id="milFrom"
              name="milFrom"
              placeholder="From"
            />
            <Field
              className={styles.numberTo}
              type="number"
              id="milTo"
              name="milTo"
              placeholder="To"
            />
          </div>
        </div>

        <button type="submit" className="button">
          Search
        </button>
      </Form>
    </Formik>
  );
}
