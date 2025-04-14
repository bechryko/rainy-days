import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
   providers: [
      importProvidersFrom(
         BrowserModule,
         ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
         })
      ),
      provideRouter(routes),
      provideAnimations()
   ]
};
