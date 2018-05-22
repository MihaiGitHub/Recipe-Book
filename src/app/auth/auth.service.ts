import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable() // To allow the injection of other services into it
export class AuthService {
    token: string;

    constructor(private router: Router){}

    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken().then(
                        (token: string) => this.token = token
                    )
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    // Logout using the Firebase signOut method and reset token
    logout(){
        firebase.auth().signOut();
        this.token = null;
    }

    // Return token from firebase package
    getToken(){
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    // Method to determine if user is authenticated or not
    isAuthenticated(){
        // If token is not equal to null; If token is null then user is not authenticated
        return this.token != null; // Only returns true if there is a valid token
    }
}