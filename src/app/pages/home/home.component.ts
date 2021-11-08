import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
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
    this.sun = event.target.value;
    this.seacrhPlants();
  }

  selectWaterFrequency(event) {
    this.water = event.target.value;
    this.seacrhPlants();
  }

  havePets(event) {
    this.pets = event.target.value;
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
      this.httpService.getPlants(dados).then(
        retorno=>{
          retorno.subscribe(
            dados=>{
              this.plantsList = dados;
            }
          )
        }
      )
    }
  }

  backToTheTop() {
    window.scroll(0, 0);
  }

}
