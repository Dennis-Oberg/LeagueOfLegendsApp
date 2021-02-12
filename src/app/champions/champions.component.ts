import { Component, OnInit } from '@angular/core';

import { Champ } from '../champclass';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FireBaseService, IChampion } from '../services/fire-base.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  
  public champdetails: IChampion;
  public championslist: Observable<any[]>;
  
  constructor(private af: AngularFirestore) { 
    
      this.championslist = af.collection('Champions').snapshotChanges().pipe(
        map(j => j.map(
        a => {
        const data = a.payload.doc.data() as Champ;
        const id = a.payload.doc.id;
        return {id, ...data};
        
        }
        
        ))
        
        );
        
        
  }

 

 getChampion(): Observable<Champ[]> {
   return this.championslist;
 }

 addChampion(c: Champ){
  this.af.collection('Champions').add(c);
 }

  ngOnInit(): void {
   
  }

 
}
