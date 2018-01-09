class Spacecraft {
  constructor(public propulsor: string) {}

  jumpToHiperSpace() {
    console.log(`Entering hiperspace with ${this.propulsor}`);
  }
}
interface ContainerShip {
  cargoContainer: number;
}
export {Spacecraft, ContainerShip }