import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task-model';
import { TaskFormComponent } from '../task-form/task-form.component';

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
    // Certifique-se de que 'completed' está presente
    task.completed = false; // Define como falso por padrão, se necessário
    this.dialogRef.close(task);
  }
}
