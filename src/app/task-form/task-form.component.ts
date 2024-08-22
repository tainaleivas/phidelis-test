import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      // Lógica para enviar o formulário
      console.log('Formulário enviado:', this.taskForm.value);
    }
  }
}
