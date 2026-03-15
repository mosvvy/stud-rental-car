"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import styles from "./BookForm.module.css";
import DateField from "./DateField";

// interface BookFormProps {
//   onSubmit: () => void;
// }

const bookingSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Valid email").required("Required"),
  bookingDate: Yup.date().min(new Date(), "Date cannot be earlier than today"),
  comment: Yup.string(),
});

const BookForm = () => {
  return (
    <Formik
      onSubmit={(values) => {
        // onSubmit();
        toast.success("Success!");
        console.log(values);
      }}
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      validationSchema={bookingSchema}
    >
      <Form className={styles.form}>
        <h2 className={styles.title}>Book your car now</h2>
        <p className={styles.desc}>
          Stay connected! We are always ready to help you.
        </p>

        <div className={styles.wrapper}>
          <Field
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <Field
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <DateField name="bookingDate" placeholder="Booking Date" />
          <ErrorMessage
            name="bookingDate"
            component="div"
            className={styles.error}
          />

          <Field
            className={styles.input}
            type="text"
            id="comment"
            name="comment"
            placeholder="Comment"
          />
        </div>

        <button type="submit" className={`button ${styles.button}`}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookForm;
