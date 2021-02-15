import { Component, OnInit } from '@angular/core';

import { Champ } from '../champclass';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FireBaseService } from '../services/fire-base.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  
 
  championslist$: Observable<any[]>;
  
  
  
  constructor(private af: AngularFirestore) { 
    
      this.championslist$ = af.collection('Champions').valueChanges();
          
  }

 addChampion(c: Champ){
  this.af.collection('Champions').add(c);
 }

  ngOnInit(): void {
   
  }

  onSelectChamp(Champ){
   this.championslist$
    
  }

  
}
