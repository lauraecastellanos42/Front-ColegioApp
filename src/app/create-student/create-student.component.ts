import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  form: any;
  curses: any[]| undefined;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      curso: [null, [Validators.required]],
    });
    this.api.getItems('colegio/curso/listarCursos').subscribe((curses: any) => {
      this.curses = curses;
    });
  }

  submit() {
    console.log(this.form.value);
    /*this.api.register('colegio/estudiante/guardarEstudiante', this.form.value).subscribe((res) => {
        this.form.reset();
    });*/
  }

}
