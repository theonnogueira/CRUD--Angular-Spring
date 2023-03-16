import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    { _id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name','category'];

  constructor() {
    //this.cursos = [];
  }

  ngOnInit(): void {

  }

}
