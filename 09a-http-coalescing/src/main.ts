import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';
import {profileTick} from './app/common';

async function main() {
  try {
    const appRef = await bootstrapApplication(AppComponent, appConfig);
  } catch (err) {
    console.error(err);
  }
}

main();
