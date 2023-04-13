import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/main/models/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  @Input() usuarios: Usuario[] = [];
  //@Input() usuarios: any;
  @Output() eliminaUsuario = new EventEmitter();
  @Output() editarUsuario = new EventEmitter();

  constructor() { 
    console.log('Usuarios en list ',this.usuarios);
  }

  ngOnInit(): void {
    console.log('Usuarios en list ',this.usuarios);
  }

  borrar(usuario: Usuario){
    const resp = confirm('Desea eliminar el registro?');
    if(resp){
      this.eliminaUsuario.emit(usuario);
    }
    
  }

  actualizar(usuario: any){
    console.log('Actualizar ',usuario);
    this.editarUsuario.emit(usuario);
  }
}
