import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true, // Torna o componente standalone
  imports: [ReactiveFormsModule, NgIf], // Importa os módulos necessários diretamente
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<string>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskAdded.emit(this.taskForm.value.title);
      this.taskForm.reset();
    }
  }
}
