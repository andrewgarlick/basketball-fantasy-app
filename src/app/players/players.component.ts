import {Component, OnInit} from '@angular/core';
import {TeamService} from "../team.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  protected teams: any;
  protected players: any;

  constructor(protected teamService: TeamService) {
  }

  ngOnInit() {
    this.teamService.getTeams()
      .then(teams => {
        this.teams = teams;
      });
    this.teamService.getPlayers()
      .then(players => {
        this.players = players;
      });
  }

}
