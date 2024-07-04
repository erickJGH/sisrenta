import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from './app/enviroments/environment.development';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


bootstrapApplication(AppComponent, {
  providers:[
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"sisrenta-ca851","appId":"1:210472610393:web:a14f81d8974713062adf48","storageBucket":"sisrenta-ca851.appspot.com","apiKey":"AIzaSyB3a1wfw4XXzTXGZWRlelipI1LhVNptUaM","authDomain":"sisrenta-ca851.firebaseapp.com","messagingSenderId":"210472610393","measurementId":"G-W68L2FQD16"})), provideAuth(() => getAuth()),
    provideRouter(routes),
  ]

}).catch(err => console.error(err));