import { Component } from '@angular/core';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { NgFor, NgClass } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskModalComponent, 
    NgFor,
    NgClass,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
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

  // Comportamentos da Todo List

  addTask(task: Task) {
    if (task) {
      this.items.push(task); 
    }
  }

  removeTask(task: Task) {
    const confirmDelete = window.confirm('Tem certeza de que deseja remover esta tarefa?');
    if (confirmDelete) {
      this.items = this.items.filter(item => item !== task);
    }
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
  }
  
}
