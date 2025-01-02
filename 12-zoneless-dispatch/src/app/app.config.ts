import {ApplicationConfig, provideAppInitializer, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {profileTick} from './common';
import {provideUpdateStore} from './store';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({eventCoalescing: true}),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      // withInterceptors([profileHttp()]),
    ),
    provideAppInitializer(profileTick),
    provideUpdateStore(),
  ]
};
