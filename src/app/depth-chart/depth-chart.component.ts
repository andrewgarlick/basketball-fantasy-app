import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";

@Component({
  selector: 'app-depth-chart',
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.css']
})
export class DepthChartComponent implements OnInit {
  team: any;
  players: any;
  constructor(protected teamService: TeamService) {

  }

  ngOnInit() {
  }

  searchclicked() {
    this.teamService.getDepthCharts(this.team)
      .then(players => {
      this.players = players;
    });

  }
}
