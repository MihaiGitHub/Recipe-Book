import * as firebase from 'firebase';

export class AuthService {
    token: string;

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
                    firebase.auth().currentUser.getIdToken().then(
                        (token: string) => this.token = token
                    )
                }
            )
            .catch(
                error => console.log(error)
            );
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