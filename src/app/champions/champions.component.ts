import { Component, OnInit } from '@angular/core';
import {CHAMPIONS} from '../champsfornow';
import {Champ} from '../champinterface';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {



  Champ = CHAMPIONS;
  selectedChamp: Champ;
 
  showGender() : string{
    if (this.selectedChamp.isMale){
       return 'Male';
    } else
    return 'Female';
  }
  onSelectChamp(champ: Champ):void{
    this.selectedChamp = champ;
    
  }
  constructor(private afs: AngularFirestoreModule) { 

  }

  ngOnInit(): void {
  }
  

}
