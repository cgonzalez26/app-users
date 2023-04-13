import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import "rxjs";
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( 
    // con esta variable vamos a realizar las Peticiones http al Servidor
    private http: HttpClient
    ) { }
  
  create(usuario: Usuario){
    return this.http.post('./usuarios', usuario).pipe(
      map((response) => { return response})
    );
  }  

  destroy(usuario: Usuario){
    return this.http.delete('./usuarios/'+ usuario._id).pipe(
      map((response) => { return response})
    );  
  }  

  update(usuario: Usuario){
    return this.http.put('./usuarios/'+ usuario._id, usuario).pipe(
      map((response) => { return response})
    );  
  }  

  getUsuarios():  Observable<Usuario[]>{
    return this.http.get<Usuario[]>('./usuarios').pipe(
      map((response) => { return response})
    );
  }  

  getUsuario(usuario: Usuario) : Observable<Usuario>{
    return this.http.get<Usuario>('./usuarios'+ usuario._id).pipe(
      map((response) => { return response})
    );
  } 
}
