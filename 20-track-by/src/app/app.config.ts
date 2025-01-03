import {
  ApplicationConfig,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {profileTick} from './common';
import {provideDispatcher} from './store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    // provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      // withInterceptors([profileHttp()]),
    ),
    provideAppInitializer(profileTick),
    provideDispatcher(),
  ]
};
