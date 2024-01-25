import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { RecaptchaVerifier, getAuth, provideAuth } from '@angular/fire/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { firebaseApp, firebaseConfig } from './config/firebase-app-config';
import { environment } from '../environments/environment';

const reCaptchaEnterpriseSiteKey: string = environment['reCaptchaEnterpriseSiteKey'];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAppCheck(() => {
        // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=credit-base-65f11
        const provider = new ReCaptchaEnterpriseProvider(reCaptchaEnterpriseSiteKey);
        return initializeAppCheck(firebaseApp, { provider, isTokenAutoRefreshEnabled: true });
    })), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage()))]
};
