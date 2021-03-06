import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { ItemsComponent } from './items/items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ApploginComponent } from './applogin/applogin.component';
import { AddChampionComponent } from './add-champion/add-champion.component';
import { AddItemComponent } from './add-item/add-item.component';




@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ItemsComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
    ApploginComponent,
    AddChampionComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  
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
