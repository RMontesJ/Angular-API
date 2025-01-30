import { Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ConsultaPracticaComponent } from './consulta-practica/consulta-practica.component';

export const routes: Routes = [
   {path: 'consultar',component: ConsultarComponent},
   {path: 'insertar',component: InsertarComponent},
   {path: 'consulta-practica',component: ConsultaPracticaComponent}
];
