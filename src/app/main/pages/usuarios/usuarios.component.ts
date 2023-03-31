import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [
    {id :1, nombre: 'Cristian',apellido:'Gonzalez',email:'cgonzalez@gmail.com',editable:false},
    {id :2, nombre: 'Ariel',apellido:'Lopez',email:'alopez@gmail.com',editable:false}
  ];

  constructor(
    private _userService: UsuarioService
  ) { }

  ngOnInit(): void {
    //this.getUsuarios();
  }

  //creamos nuestro metodo para obtener los Usuarios
  getUsuarios() {
    this._userService.getUsuarios().subscribe(response => {
      this.usuarios = response;
    });
      
  }

  create(usuario: Usuario){
    console.log('Usuario en Usuarios component',usuario);
    this.usuarios.push(usuario);
  }

  borrar(usuario: Usuario){
    console.log('usuario a borrar', usuario);
    //buscar un registro en el array    
    const index = this.usuarios.indexOf(usuario); 
    console.log('indice ',index);
    this.usuarios.splice(index,1);//remover 1 item
    console.log('lista modificada', this.usuarios);
    //funciona
    //this.usuarios = this.usuarios.filter(h => h !== usuario);
  }

  actualizar(usuario: any){
    const index = this.usuarios.indexOf(usuario.original);
    this.usuarios[index] = usuario.edited;
  }
}
