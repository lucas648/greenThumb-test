import { selectSun, selectWater, selectPets } from './../../store/actions';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RequestPlants } from 'src/app/interfaces/IRequests';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sun : string = "";
  water : string = "";
  pets : string = "";

  plantsList : any;

  public plants$ : Observable<any>;

  constructor(
    private httpService : HttpService,
    private store: Store<any>
  ) { 
    this.plants$ = store.pipe(
      select('sunReducer')
    )
  }

  selectSunType(event) {
    this.store.dispatch(selectSun({sun: event.target.value}));
    this.seacrhPlants();
  }

  selectWaterFrequency(event) {
    this.store.dispatch(selectWater({water: event.target.value}));
    this.seacrhPlants();
  }

  havePets(event) {
    this.store.dispatch(selectPets({pets: event.target.value}));
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
