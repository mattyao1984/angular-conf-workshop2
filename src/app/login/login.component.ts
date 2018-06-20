import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'pbp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(loginType: string): void {
    switch(loginType){
      case 'google':
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        break;
      case 'facebook':
        this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
        break;
      default:
        break;
    }
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
