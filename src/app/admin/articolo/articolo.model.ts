export class Articolo {
    marca:string;
    modello:string;
    link:string;
    voti:number;

    constructor(marca:string, modello:string, link:string, voti?:number) {
        this.marca = marca;
        this.modello = modello;
        this.link = link;
        this.voti = voti || 0;
    }

    miPiace():void {
        this.voti++;
    }

    nonPiace():void {
        this.voti--;
    }

    getStile():string {
        if(this.voti > 0)
          return "btn btn-primary";
        else
          return "btn btn-danger";
      }
}