import styles from "./page.module.css";

interface CarPageProps {
  params: Promise<{ id: string }>;
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;

  return <h1>Welcome to the Car Page: {id}</h1>;
}
