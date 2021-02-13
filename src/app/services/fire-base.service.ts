import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { Champ } from '../champclass';


@Injectable({
  providedIn: 'root'
})
export class FireBaseService {


  public championslist: Observable<any[]>;


  constructor(private firestore: AngularFirestore) { 
    
  }
  getChampion(): Observable<Champ[]>{
    return this.championslist;
  }
  addChampion(payload: IChampion){
    return this.firestore.collection("Champions").add(payload);
  }
  updateChampion(champname: string, payload: IChampion){
    return this.firestore.doc('Champions/' + champname).update(payload);
  }
  deleteEmployee(champname: string){
    return this.firestore.doc('Champions/' + champname).delete();
  }
}

export interface IChampion{
  name?: string;
  id: number;

}
