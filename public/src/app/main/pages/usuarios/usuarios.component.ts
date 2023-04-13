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
    // {id :1, nombre: 'Cristian',apellido:'Gonzalez',email:'cgonzalez@gmail.com',editable:false},
    // {id :2, nombre: 'Ariel',apellido:'Lopez',email:'alopez@gmail.com',editable:false}
  ];

  constructor(
    private _userService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  //creamos nuestro metodo para obtener los Usuarios
  getUsuarios() {
    //vamos hacer la peticion de los datos al server
    this._userService.getUsuarios().subscribe(response => {
      this.usuarios = response;
    });
      
  }

  create(usuario: Usuario){
    console.log('Usuario en Usuarios component',usuario);
    this._userService.create(usuario).subscribe(response => {
      //listamos los Usuarios de la BD mongo
      this.getUsuarios(); 
      console.log('Usuario agregado',response);
       //this.usuarios.push(usuario);
    });
    //this.usuarios.push(usuario);
    //this._userService.create(usuario).then(status =>this.getUsuarios())

  }

  borrar(usuario: Usuario){
    //buscar un registro en el array    
    /*const index = this.usuarios.indexOf(usuario); 
    console.log('indice ',index);
    this.usuarios.splice(index,1);//remover 1 item
    console.log('lista modificada', this.usuarios);*/
    //funciona
    //this.usuarios = this.usuarios.filter(h => h !== usuario);

    //para mongodb
    this._userService.destroy(usuario).subscribe(response => {
      //listamos los Usuarios de la BD mongo
      this.getUsuarios(); 
      console.log('Usuario borrado',response);
       //this.usuarios.push(usuario);
    });;
  }

  actualizar(usuario: any){
    //esto es para Array
    /*const index = this.usuarios.indexOf(usuario.original);
    this.usuarios[index] = usuario.edited;*/
    //reemplazamos para mongodb
    this._userService.update(usuario).subscribe(response => {
      //listamos los Usuarios de la BD mongo
      this.getUsuarios(); 
      console.log('Usuario actualizado',response);
       //this.usuarios.push(usuario);
    });
  }
}
