import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "formik";
import styles from "./BookForm.module.css";

export default function DateField({
  name,
  placeholder,
}: {
  name: string;
  placeholder?: string;
}) {
  const [field, , helpers] = useField(name);

  return (
    <DatePicker
      selected={field.value ? new Date(field.value) : null}
      onChange={(date: Date | null) =>
        helpers.setValue(date?.toISOString().split("T")[0])
      }
      placeholderText={placeholder}
      className={styles.input}
      dateFormat="yyyy-MM-dd"
    />
  );
}
