import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consulta-practica',
  imports: [NgFor],
  templateUrl: './consulta-practica.component.html',
  styleUrl: './consulta-practica.component.css'
})
export class ConsultaPracticaComponent {
  productos: any[] = [];

  constructor(private servicio:DataService){

  }
  ngOnInit():void {
    this.servicio.getPhotos().subscribe((data:any) => (this.productos = data.products));
    console.log(this.productos);
}
}
