import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

declare var originalSetTimeout: any;

console.log("Check setTimeout: " + (setTimeout == originalSetTimeout));

async function main() {
  try {
    await bootstrapApplication(AppComponent, appConfig);
  } catch (err) {
    console.error(err);
  }
}

main();

