import { Component, inject } from "@angular/core";
import { FirebaseTestAuthService } from "../service/firebase-test-auth.service";

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html'
})
export class SignupComponent {
    firebaseAuth: FirebaseTestAuthService = inject(FirebaseTestAuthService);

    signup(username: string, password: string) {
        this.firebaseAuth.createUser(username, password);
    }
}
