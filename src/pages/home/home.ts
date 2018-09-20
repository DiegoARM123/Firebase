import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(usuario =>{if(usuario){
      this.email=usuario.email;
    }
    console.log(usuario);
  });
  }
  signInWithSocial(social){
  witch(social){
    case "facebook":
    this.afAuth.auth
    .signInWithPopup(new firebase)
    this.afAuth.auth

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
