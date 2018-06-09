import * as firebase from 'firebase';

export class AuthService {
    token: string;
    signUpUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }
    singInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(_response => firebase.auth().currentUser.getIdToken()
                    .then((token: string) => this.token = token))
            .catch(error => console.log(error));
    }
    signOut() {
        firebase.auth().signOut();
        this.token = null;
    }
    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token);
        return this.token;
    }
    isAuthenticated() {
        return (this.token != null);
    }
}
