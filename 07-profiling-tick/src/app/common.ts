import {ApplicationRef} from '@angular/core';

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
