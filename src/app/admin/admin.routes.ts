import { CategoriasComponent } from './categorias/categorias.component';
import { PostagensComponent } from './postagens/postagens.component';
import { Route } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



export const ROUTES: Route[] = [

    { path: 'login', component: LoginComponent },
    { path: 'postagens', component: PostagensComponent, canActivate: [ AuthGuard ] },
    { path: 'categorias', component: CategoriasComponent, canActivate: [ AuthGuard ] },
    { path: 'usuarios', component: UsuariosComponent, canActivate: [ AuthGuard ] },

];
