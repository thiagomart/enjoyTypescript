let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode  = episode +1
console.log("This is episode " + episode);
let call = (name: string) => console.log(`Do you copy, ${name}`)
call('BB-8')



class Spacecraft{
    constructor(public propulsor: string){}

    jumpToHiperSpace(){
        console.log(`Entering hiperspace with ${this.propulsor}`);
    }

}
let ship = new Spacecraft('hyperdrive');
ship.jumpToHiperSpace();

class MillenniumFalcon extends Spacecraft{
    
}