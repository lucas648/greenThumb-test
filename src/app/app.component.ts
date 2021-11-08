import { Component } from '@angular/core';
import { RequestPlants } from './interfaces/IRequests';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'greenThumb';

  
}
