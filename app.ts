import { Spacecraft, ContainerShip } from "./base-ship";
import { MillenniumFalcon} from "./starfigther";


let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode  = episode +1
console.log("This is episode " + episode);
let call = (name: string) => console.log(`Do you copy, ${name}`)
call('BB-8')




let ship = new Spacecraft('hyperdrive');
ship.jumpToHiperSpace();


let falcon = new MillenniumFalcon()
falcon.jumpToHiperSpace()