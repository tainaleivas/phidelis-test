import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../models/task-model';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports:[ReactiveFormsModule, NgIf],
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();
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
        completed: false, // Certifique-se de incluir a propriedade 'completed'
      };
      this.taskAdded.emit(newTask);
      this.taskForm.reset();
    }
  }
}
