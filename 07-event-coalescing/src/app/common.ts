import {store} from './store';
import {ApplicationRef} from '@angular/core';

export function createIncButton(caller: string) {
  console.log("createIncButton", caller, "IsNgZone=" + isRunningUnderNgZone());

  const button = document.createElement("button");
  button.textContent = caller;
  document.documentElement.prepend(button);
  button.addEventListener("click", () => {
    store.counter++;
  })

  return button;
}

declare const Zone: any;
function isRunningUnderNgZone() {
  return Zone.current.name === "angular";
}

export function profileTick() {
  const originalTick = ApplicationRef.prototype.tick;

  ApplicationRef.prototype.tick = function () {
    console.log("tick");

    originalTick.apply(this, arguments as any);
  }
}
