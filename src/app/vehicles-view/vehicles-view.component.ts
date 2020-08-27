import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Vehicles } from '../interfaces/person';

@Component({
  selector: 'app-vehicles-view',
  templateUrl: './vehicles-view.component.html',
  styleUrls: ['./vehicles-view.component.css'],
})
export class VehiclesViewComponent implements OnInit {
  vehicle: Vehicles;

  constructor(private swapi: StarWarsService) {}

  ngOnInit(): void {
    this.swapi.getVehicles().subscribe(
      (data: Vehicles) => (this.vehicle = { ...data }),
      (error) => console.error(error)
    );
  }
}
