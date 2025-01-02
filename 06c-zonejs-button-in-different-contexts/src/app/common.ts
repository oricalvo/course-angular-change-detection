import {store} from './store';
import {NgZone} from '@angular/core';

export function createIncButton(caller: string) {
  console.log("createIncButton", caller, "IsNgZone=" + NgZone.isInAngularZone());

  const button = document.createElement("button");
  button.textContent = caller;
  document.documentElement.prepend(button);
  button.addEventListener("click", () => {
    store.counter++;
  })

  return button;
}

// declare const Zone: any;
// function isRunningUnderNgZone() {
//   NgZone.isInAngularZone()
//
//   return Zone.current.name === "angular";
// }
