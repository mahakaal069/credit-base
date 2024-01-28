import { TestBed } from '@angular/core/testing';

import { FirebaseTestAuthService } from './firebase-test-auth.service';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseApp, firebaseConfig } from '../../../config/firebase-app-config';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ReCaptchaEnterpriseProvider, initializeAppCheck } from 'firebase/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../../../../environments/environment';
import { provideAppCheck } from '@angular/fire/app-check';

describe('FirebaseTestAuthService', () => {
    let service: FirebaseTestAuthService;
    const reCaptchaEnterpriseSiteKey: string = environment['reCaptchaEnterpriseSiteKey'];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
                importProvidersFrom(provideAuth(() => getAuth())),
                importProvidersFrom(provideAppCheck(() => {
                    // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=credit-base-65f11
                    const provider = new ReCaptchaEnterpriseProvider(reCaptchaEnterpriseSiteKey);
                    return initializeAppCheck(firebaseApp, {
                        provider,
                        isTokenAutoRefreshEnabled: true,
                    });
                })),
                importProvidersFrom(provideFirestore(() => getFirestore())),
                importProvidersFrom(provideDatabase(() => getDatabase())),
                importProvidersFrom(provideMessaging(() => getMessaging())),
                importProvidersFrom(provideStorage(() => getStorage())),
            ]
        });
        service = TestBed.inject(FirebaseTestAuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should create a user', () => {
        let user = service.createUser('abc@gmail.com', 'babycarayfayt12gvv@');
        console.log('########## ', user);
    })
});
