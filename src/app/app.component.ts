import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColegioApp';
  columnsAsignature = [
    {key: 'id', name: 'Identificador'},
    {key: 'nombre', name: 'Nombre'},
    {key: 'profesor.nombre', name: 'Nombre Profesor'},
    {key: 'curso.grado', name: 'Grado'},
    {key: 'curso.salon', name: 'Salon'},
    {key: 'curso.colegio.nombre', name: 'Colegio'},
  ];
}
