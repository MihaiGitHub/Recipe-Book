import { Component, OnInit } from '@angular/core';
// npm install --save firebase
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      authDomain: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
    });
  }

  onNavigate(feature: string){
      this.loadedFeature = feature;
  }
  
}
