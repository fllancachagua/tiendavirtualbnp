export class BookPrices {
    public presentacion: string;
    public precioSoles: string;
   // public precioDolares: string;

    constructor(presentacion: string, precioSoles: string /*, precioDolares: string*/){
        this.presentacion   = presentacion;
        this.precioSoles    = precioSoles;
     //   this.precioDolares  = precioDolares;
    }
}
