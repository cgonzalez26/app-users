export class Usuario {
    _id: number;
    nombre: string;
    apellido : string;
    email : string;
    editable: boolean;
    constructor(){
        this._id = Math.floor(Math.random() * 100);
        this.nombre ="";
        this.apellido = "";
        this.email = "";
        this.editable = false;
    }
}
