import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';
import { profileMethod } from '@cdr/common/dist/profile-utils';

profileMethod(ApplicationRef.prototype, 'tick');

async function main() {
  try {
    const appRef = await bootstrapApplication(AppComponent, appConfig);
  } catch (err) {
    console.error(err);
  }
}

main();
