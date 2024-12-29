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

  let count = 0, sum = 0, max = 0, min = Number.MAX_VALUE, avg = 0;
  ApplicationRef.prototype.tick = function () {
    const before = performance.now();
    originalTick.apply(this, arguments as any);
    const time = performance.now() - before;

    ++count;
    sum += time;

    if (time > max) {
      max = time;
    }

    if (time < min) {
      min = time;
    }

    avg = sum / count;

    console.log(`tick, count: ${count.toFixed(0)}, avg: ${avg.toFixed(2)}, max: ${max.toFixed(2)}, min: ${min.toFixed(2)}`);
  }
}
