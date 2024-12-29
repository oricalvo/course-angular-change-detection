import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {ApplicationRef, provideAppInitializer, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {appConfig} from './app/app.config';
import {store} from './app/store';
import {createIncButton, profileTick} from './app/common';

profileTick();

async function main() {
  try {
    await bootstrapApplication(AppComponent, appConfig);

    createIncButton("main");
  } catch (err) {
    console.error(err);
  }
}

main();
