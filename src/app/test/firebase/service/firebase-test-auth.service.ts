import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class FirebaseTestAuthService {

    constructor() { }

    createUser(email: string, password: string) {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
}
