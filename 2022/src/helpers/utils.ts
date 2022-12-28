// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export async function delay(ms: number) {
  return new Promise((resolve) => setInterval(resolve, ms));
}

export function printTime<F extends AnyFunction>(fn: F) {
  return (...args: Parameters<F>): ReturnType<F> => {
    const begin = Date.now();
    const func = fn(...args);
    console.log(
      `Total execution time of '${fn["name"]}' is ${Date.now() - begin}ms.`
    );
    return func;
  };
}

export function printTimeAsync<F extends AnyFunction>(fn: F) {
  return async (...args: Parameters<F>): Promise<Awaited<ReturnType<F>>> => {
    const begin = Date.now();
    const func = await fn(...args);
    console.log(
      `Total execution time of '${fn["name"]}' is ${Date.now() - begin}ms.`
    );
    return func;
  };
}
