import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';  // La configuration d'app
import { AppComponent, routes } from './app/app.component';  // Importer routes de app.component.ts

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,   // Ajouter les autres providers de appConfig
    provideRouter(routes)     // Configuration du routage avec les routes
  ]
})
  .catch((err) => console.error(err));
