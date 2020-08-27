import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People, Vehicles } from './interfaces/person';
import { Film } from './interfaces/film';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  apiUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPeople = () => {
    return this.http.get<People>(`${this.apiUrl}/people/`);
  };

  getFilm = (url: string) => {
    return this.http.get<Film>(url);
  };

  getVehicles() {
    return this.http.get<Vehicles>(`${this.apiUrl}/vehicles/`);
  }
}
