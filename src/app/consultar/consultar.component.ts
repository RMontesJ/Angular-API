import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-consultar',
  imports: [NgIf,NgFor],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string="";

constructor(private servicio: DataService) {}
  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts(): void {
    this.servicio.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(this.posts);
      },
      (error) => {
        this.errorMessage = 'A ocurrido un error mientras se hacia el POST';
      }
    );
  }
}