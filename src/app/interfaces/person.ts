export interface Person {
  name: string;
  homeworld: string;
  films: string[];
}

export interface People {
  counter: number;
  next: string;
  results: Person[];
}

export interface Vehicles {
  name: string;
  pilots: string[];
}
