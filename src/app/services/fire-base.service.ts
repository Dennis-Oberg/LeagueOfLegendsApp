import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { Champ } from '../champclass';



@Injectable({
  providedIn: 'root'
})
export class FireBaseService {


   championslist$: Observable<any[]>;


  constructor(private firestore: AngularFirestore) { 
    this.championslist$ = firestore.collection('Champion').valueChanges();
  }
  getChampion(): Observable<Champ[]>{
    return this.championslist$;
  }
  addChampion(payload: Champ){
    return this.firestore.collection("Champions").add(payload);
  }
  updateChampion(champname: string, payload: Champ){
    return this.firestore.doc('Champions/' + champname).update(payload);
  }
  deleteEmployee(champname: string){
    return this.firestore.doc('Champions/' + champname).delete();
  }
}

