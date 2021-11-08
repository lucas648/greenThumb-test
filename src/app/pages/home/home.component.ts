import { Component, OnInit } from '@angular/core';
import { RequestPlants } from 'src/app/interfaces/IRequests';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sun : string = "";
  water : string = "";
  pets : string = "";

  plantsList : any;

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  selectSunType(event) {
    this.sun = event.value
  }

  selectWaterFrequency(event) {
    this.water = event.value
  }

  havePets(event) {
    this.pets = event.value
    this.seacrhPlants();
  }

  seacrhPlants() {
    if (
      this.sun &&
      this.water &&
      this.pets !== undefined
    ) { 
      const dados: RequestPlants = {
        sun: this.sun, 
        water: this.water, 
        pets: this.pets
      };
      this.plantsList = this.httpService.getPlants(dados);
    }
  }

  backToTheTop() {
    window.scroll(0, 0);
  }

}
