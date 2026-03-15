import { useField } from "formik";

export function formatMileage(value: string | number, prefix = ""): string {
  const num = Number(value);
  if (isNaN(num)) return String(value);

  const formatted = num.toLocaleString("en-US");

  return `${prefix} ${formatted}`;
}

interface MileageFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  prefix?: string;
}

export default function MileageField({
  name,
  prefix = "",
  ...props
}: MileageFieldProps) {
  const [field, , helpers] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    helpers.setValue(raw);
  };

  return (
    <input
      {...field}
      {...props}
      value={field.value ? formatMileage(field.value, prefix) : ""}
      onChange={handleChange}
    />
  );
}
