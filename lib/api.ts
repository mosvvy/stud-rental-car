import Car from "@/types/cars";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

const PER_PAGE = 12;

interface CarsHttpResponse {
  cars: Car[];
  totalPages: number;
  totalCars: number;
}

async function fetchCars(
  page: number,
  brand?: string,
  rentalPrice?: string,
  minMileage?: string,
  maxMileage?: string,
  limit?: string,
): Promise<CarsHttpResponse> {
  const params = {
    page,
    brand,
    rentalPrice,
    minMileage,
    maxMileage,
    limit,
  };

  const response = await instance.get<CarsHttpResponse>("/cars", {
    params: params,
  });

  return response.data;
}

export { fetchCars };
