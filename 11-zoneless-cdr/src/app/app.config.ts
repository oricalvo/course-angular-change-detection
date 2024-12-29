import {
  ApplicationConfig,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
// import {provideDispatcher} from './store';
import {profileTick} from "@cdr/common/dist/angular-utils";

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({eventCoalescing: true}),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAppInitializer(profileTick),
    // provideDispatcher(),
  ]
};
