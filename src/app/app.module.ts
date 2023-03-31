import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsuariosComponent } from './main/pages/usuarios/usuarios.component';
import { UsuarioNewComponent } from './main/pages/usuarios/usuario-new/usuario-new.component';
import { UsuarioListComponent } from './main/pages/usuarios/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './main/pages/usuarios/usuario-edit/usuario-edit.component';
import { UsuarioDetailsComponent } from './main/pages/usuarios/usuario-details/usuario-details.component';
import { UsuarioService } from './main/services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioNewComponent,
    UsuarioListComponent,
    UsuarioEditComponent,
    UsuarioDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
