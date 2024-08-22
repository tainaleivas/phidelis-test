import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task-model';
import { TaskFormComponent } from "../task-form/task-form.component"; // Importa modelo de tarefa

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {
  constructor(private dialogRef: MatDialogRef<TaskModalComponent>) {}

  onTaskAdded(task: Task) {
    // Garanta que meu objeto 'Task' tenha a propriedade 'completed'
    task.completed = false; 
    this.dialogRef.close(task);
  }
}
