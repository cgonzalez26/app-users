import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/main/models/usuario';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  editUsuario: Usuario = new Usuario();
  @Output() editarUsuario = new EventEmitter();
  @Input() usuario!: Usuario;

  constructor() { }

  ngOnInit(): void {
    //Object.assign() copia todas las propiedades 
    //enumerables de uno o más objetos fuente a un objeto destino.
    Object.assign(this.editUsuario, this.usuario);
    
    //Ladiferencia que este va modificando el Objeto visualizado
    //this.editUsuario = this.usuario;
  }

  actualizar(){
    console.log('usuario cargado en Usuario editar',this.editUsuario);
    //volvemos a setear en falso para que no muestre el form de Editar
    this.editUsuario.editable = false;  
    //Emitimos un objeto con 2 parametros el usuario Original y el Editado
    this.editarUsuario.emit({
       original: this.usuario,
       edited: this.editUsuario
    });
    this.editUsuario = new Usuario();
  }

}
