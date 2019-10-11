import { BookAdded } from './book-added';

export class ShoopingCart {
    public books: BookAdded[];
    public subTotalProducto: number;
    public subTotalEnvio: number;
    public total: number;
    public codigoMoneda:string = 'S/.';

    //constructor(public books: BookAdded[],public subTotalProducto: number, public subTotalEnvio: number, publictotal: number){}
    constructor( books: BookAdded[], subTotalProducto: number, subTotalEnvio: number, total: number){
        this.books = books;
        this.subTotalProducto = subTotalProducto;
        this.subTotalEnvio = subTotalEnvio;
        this.total = total;
        this.codigoMoneda = 'S/.'
    }


}
