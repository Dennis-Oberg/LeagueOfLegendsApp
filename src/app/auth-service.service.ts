import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth: AngularFireAuth) {
  
   
  }
   getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
    }
    login(){

    }
}
