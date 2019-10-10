import { BookAdded } from './book-added';

export class ShoopingCart {
   /* public books: BookAdded[];
    public subTotalProducto: number;
    public subTotalEnvio: number;
    public total: number;*/

    constructor(public books: BookAdded[],public subTotalProducto: number, public subTotalEnvio: number, publictotal: number){}


}
