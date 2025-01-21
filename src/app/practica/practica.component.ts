import { Component } from '@angular/core';
import { ServicioPracticaService } from '../servicio-practica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],// no importamos httpClient porque esta en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  datos: any[] = []; // guardar los datos que tenga en el servicio
  constructor(private servicio: ServicioPracticaService) { }
  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos) => {
        this.datos = datos;
      });
  }
}
