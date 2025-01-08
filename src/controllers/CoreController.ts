type ProxyFunction = {
  originalMethod: Function,
  methodName: string,
  controllerName: string,
  target: CoreController,
  ...args: unknown[]
} => Promise<unknown>;

const proxyFunction: ProxyFunction = async (
  originalMethod,
  methodName,
  controllerName,
  target,
  ...args
) => {
  console.group(
    `Appel de la méthode "${methodName}" du contrôleur "${controllerName}".`
  );

  const result = await originalMethod.apply(target, args);

  console.groupEnd();

  return result;
};

export class CoreController {
  constructor() {
    const controllerName = this.constructor.name;
    console.log(`Création d'un contrôleur de type "${controllerName}".\n`);

    return new Proxy(this, {
      get(target, prop, receiver) {
        const originalMethod = Reflect.get(target, prop, receiver);
        const methodName = String(prop);

        if (typeof originalMethod !== "function") {
          return originalMethod;
        }

        return proxyFunction(
          originalMethod,
          methodName,
          controllerName,
          target
        );
      },
    });
  }
}
