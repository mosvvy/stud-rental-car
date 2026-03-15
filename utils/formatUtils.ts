export function formatMileage(value: string | number): string {
  const num = Number(value);
  if (isNaN(num)) return String(value);

  return num.toLocaleString("uk-UA");
}
