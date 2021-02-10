import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  showLeagueObjects()
  {
    var x = document.getElementById("container");
    x.className = "leagueContainer--show";
  }

  constructor() { }

  ngOnInit(): void {
    
  }


}


