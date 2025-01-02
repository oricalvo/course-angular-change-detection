import {ApplicationRef} from '@angular/core';

export function profileTick() {
  const originalTick = ApplicationRef.prototype.tick;

  ApplicationRef.prototype.tick = function () {
    console.log("tick");

    originalTick.apply(this, arguments as any);
  }
}
