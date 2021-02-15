import { Component, OnInit } from '@angular/core';
import { itemclass } from '../itemclass';
import { FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule} from 'angularfire2/database'
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


 items$: Observable<any[]>;
 item: Observable<any[]>;


  constructor(afs: AngularFirestore) { 
    this.items$ = afs.collection('Items').valueChanges();
    
  }

  ngOnInit(): void {
   
  }
  addItem(item: itemclass){
   
  }

  
    

}
