import { Spacecraft, ContainerShip } from "./base-ship";

export class MillenniumFalcon extends Spacecraft {
  constructor() {
    super("hyperdrive");
  }

  jumpToHiperSpace() {
    if (Math.random() >= 0.5) {
      super.jumpToHiperSpace();
    } else {
      console.log("Failed to jump to into hyperspace");
    }
  }
}
