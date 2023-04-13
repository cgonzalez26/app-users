import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/main/models/usuario';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent implements OnInit {
  @Output() createUser = new EventEmitter();
  nuevoUsuario: Usuario = new Usuario;

  constructor() { }

  ngOnInit(): void {
  }

  create(){
    console.log('usuario cargado en Usuario nuevo',this.nuevoUsuario);
    this.createUser.emit(this.nuevoUsuario);
    this.nuevoUsuario = new Usuario();
  }  
}
