import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";

@Component({
  selector: 'app-player-rater',
  templateUrl: './player-rater.component.html',
  styleUrls: ['./player-rater.component.css']
})
export class PlayerRaterComponent implements OnInit {

  protected rankings: any;

  constructor(protected teamService: TeamService) {

  }

  ngOnInit() {
    this.teamService.getRankings()
      .then(rankings => {
        this.rankings = rankings;
      });
  }

}
