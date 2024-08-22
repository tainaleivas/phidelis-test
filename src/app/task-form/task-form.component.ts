import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Task } from '../models/task-model';

@Component({
  selector: 'app-task-form',
  standalone: true, 
  imports: [ReactiveFormsModule, NgIf], 
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>(); // Correção: Definir como EventEmitter com @Output
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: false, // Propriedade 'completed' precisa existir na interface 'Task'
      };
      this.taskAdded.emit(newTask); // Emitir a nova tarefa
      this.taskForm.reset();
    }
  }
}
