import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { NgFor } from '@angular/common';

interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskModalComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Task[] = []; // Lista de tarefas

  constructor(private dialog: MatDialog) {}

  openTaskModal() {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Task) => { // Recebe o objeto Task do modal
      if (result) {
        this.addTask(result);
      }
    });
  }

  addTask(task: Task) {
    if (task) {
      this.items.push(task); // Adiciona a tarefa à lista
    }
  }

  removeTask(task: Task) {
    this.items = this.items.filter(item => item !== task);
  }
}
