import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamService {

  constructor(protected http: Http) {
  }


  getTeams(): Promise<any> {
    return this.http.get('https://players-api.herokuapp.com/teams')
      .toPromise()
      .then(res => res.json());
  }

  getRankings(): Promise<any> {
    return this.http.get('https://players-api.herokuapp.com/rankings')
      .toPromise()
      .then(res => res.json());
  }

  getPlayers(): Promise<any> {
    return this.http.get('https://players-api.herokuapp.com/players')
      .toPromise()
      .then(res => res.json());
  }
  getDepthCharts(team): Promise<any> {
    return this.http.get('https://players-api.herokuapp.com/depth/'+team)
      .toPromise()
      .then(res => res.json().Position);
  }
}

//   getTeams(); Promise<any> {
//     return.this.http.get('https://')
// }
