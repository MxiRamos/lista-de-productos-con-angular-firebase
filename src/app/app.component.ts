import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'listado-de-productos';

  constructor(private loginService:LoginService){


  }

  ngOnInit(): void {
      
    firebase.initializeApp({

      apiKey: "AIzaSyAtSPSBKODsgOJqUNzNpicLfGKGSwcgRgc",
      authDomain: "listado-productos-100a3.firebaseapp.com",


    })
  }
  
  estaLogueado(){

    
    return this.loginService.estaLogueado()
  }

  logout(){

    this.loginService.logout()
  }

}
