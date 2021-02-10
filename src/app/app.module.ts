import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { ItemsComponent } from './items/items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config= {
  apiKey: "AIzaSyBqVmpLjVLY-j-7oPdvKcgdTTuHKbliABY",
  authDomain: "leagueoflegends-db.firebaseapp.com",
  projectId: "leagueoflegends-db",
  storageBucket: "leagueoflegends-db.appspot.com",
  messagingSenderId: "229370159568",
};

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ItemsComponent,
    PageNotFoundComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    RouterModule.forRoot([
      {path:'', redirectTo:'/welcome-page',pathMatch:'full'},
      {path:'champions', component: ChampionsComponent},
      {path:'items', component: ItemsComponent},
      {path:'welcome-page', component:WelcomePageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
