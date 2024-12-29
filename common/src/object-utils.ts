export function patchMethod<T, R>(obj: T, funcName: keyof T, newFunc: (original: ()=>R)=>R) {
    const originalFunc: ()=>R = <any>obj[funcName];
    if(!originalFunc) {
        return;
    }

    obj[funcName] = <any>function() {
        const that = this;
        const args = arguments;

        return newFunc(function() {
            return originalFunc.apply(that, args);
        });
    }
}
