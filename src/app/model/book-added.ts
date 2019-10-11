export class BookAdded {
    public id:string;
    public titulo:string;
    public autor: string;
    public presentacion: string;
    public precioUnitario: number;
    public cantidad: number;
    public subTotal: number;
    public foto: string;
    public codigoMoneda: string;

    constructor(id:string,titulo:string,autor: string,presentacion: string,precioUnitario: number,cantidad: number,subTotal: number, codigoMoneda: string,foto: string){
        this.id     = id;
        this.titulo = titulo;
        this.autor  = autor;
        this.presentacion = presentacion;
        this.precioUnitario = precioUnitario;
        this.cantidad   = cantidad;
        this.subTotal   = subTotal;
        this.foto       = foto;
        this.codigoMoneda = codigoMoneda;
    }
}
