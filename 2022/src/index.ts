import * as Utils from "./helpers/utils";

async function main(): Promise<void> {
  await Utils.delay(500);
}

try {
  Utils.printTimeAsync(main)();
} catch (error) {
  console.error(error);
}
