import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-task-form',
  standalone: true, 
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(200)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description
      };
      this.taskAdded.emit(task); // Emite o objeto completo da tarefa
      this.taskForm.reset();
    }
  }
}
