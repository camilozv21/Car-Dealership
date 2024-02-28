import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic Type R'
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang GT'
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro SS'
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M3'
  },
  {
    id: uuid(),
    brand: 'Mercedes-Benz',
    model: 'C63 AMG'
  }

]