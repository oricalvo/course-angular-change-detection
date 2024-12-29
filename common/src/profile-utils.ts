import { patchMethod } from "./object-utils";

export function profileMethod<T, K extends keyof T>(obj: T, funcName: K) {
  patchMethod(obj, funcName, (original) => {
    console.log("BEGIN - " + <string>funcName);

    const before = performance.now();
    const retVal = original();
    const after = performance.now();

    console.log("END - " + <string>funcName + " " + (after - before));

    return retVal;
  });
}
