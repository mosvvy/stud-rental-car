import { Field, Form, Formik } from "formik";
import styles from "./SearchForm.module.css";

interface SearchFormProps {
  brands: string[];
  onSubmit: (values: {
    brand?: string;
    rentalPrice?: string;
    minMileage?: string;
    maxMileage?: string;
  }) => void;
}

export default function SearchForm({ brands, onSubmit }: SearchFormProps) {
  const prices = [30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <Formik
      onSubmit={(values) => {
        onSubmit(values);
      }}
      initialValues={{ brand: "", price: "", milFrom: "", milTo: "" }}
    >
      <Form className={styles.from}>
        <div className={styles.wrapper}>
          <label className={styles.label}>Car brand</label>
          <Field className={styles.select} as="select" id="brand" name="brand">
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
          <Field
            className={styles.select}
            as="select"
            id="rentalPrice"
            name="rentalPrice"
          >
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
              id="minMileage"
              name="minMileage"
              placeholder="From"
            />
            <Field
              className={styles.numberTo}
              type="number"
              id="maxMileage"
              name="maxMileage"
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
