export class Usuario {
    id: number;
    nombre: string;
    apellido : string;
    email : string;
    editable: boolean;
    constructor(){
        this.id = Math.floor(Math.random() * 100);
        this.nombre ="";
        this.apellido = "";
        this.email = "";
        this.editable = false;
    }
}
