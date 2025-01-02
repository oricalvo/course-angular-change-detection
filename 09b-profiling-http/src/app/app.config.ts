import {ApplicationConfig, provideAppInitializer, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {profileHttp, profileTick} from './common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: false}),
    provideRouter(routes),
    provideAppInitializer(profileTick),
    provideHttpClient(
      withInterceptors([profileHttp()]),
    ),
  ]
};

