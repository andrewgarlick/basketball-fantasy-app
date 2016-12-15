import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule} from "@angular/router";
import {PlayerRaterComponent} from './player-rater/player-rater.component';
import {RankingsComponent} from './rankings/rankings.component';
import {ProjectionsComponent} from './projections/projections.component';
import {ToolsComponent} from './tools/tools.component';
import {PlayersComponent} from './players/players.component';

import {TeamService} from './team.service';
import { DepthChartComponent } from './depth-chart/depth-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlayerRaterComponent,
    RankingsComponent,
    ProjectionsComponent,
    ToolsComponent,
    PlayersComponent,
    DepthChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomePageComponent
      },
      {
        path: 'player/rater',
        component: PlayerRaterComponent
      },
      {
        path: 'rancekings',
        component: RankingsComponent
      },
      {
        path: 'projections',
        component: ProjectionsComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      },
      {
        path: 'players',
        component: PlayersComponent
      },
     {
       path: 'depth/chart',
       component: DepthChartComponent
     },
      {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
