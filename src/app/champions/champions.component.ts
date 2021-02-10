import { Component, OnInit } from '@angular/core';
import {CHAMPIONS} from '../champsfornow';
import {Champ} from '../champinterface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {


  Champions: Observable<any[]>;

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
  constructor(private afs:AngularFirestore ) { 
    const idk = this.Champions = afs.collection('Champions').valueChanges();
console.log(idk);
  }

  ngOnInit(): void {
  }
  

}
