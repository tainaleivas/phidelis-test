import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { NgFor, NgClass } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TaskService, Task } from './task.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
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
export class AppComponent implements OnInit {
  public items: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // Carregar as tarefas da API ao iniciar a aplicação
    this.taskService.getTasks().subscribe((tasks) => {
      this.items = tasks;
    });
  }

  openTaskModal() {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        this.addTask(result);
      }
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((newTask) => {
      this.items.push(newTask); // Aqui, o 'newTask' tem que conter o ID gerado
    });
  }

  removeTask(task: Task) {
    if (task.id !== undefined) { // Verifica se o id não é undefined
      this.taskService.deleteTask(task.id).subscribe(() => {
        this.items = this.items.filter((item) => item.id !== task.id);
      });
    }
  }

  toggleCompletion(task: Task) {
    if (task.id !== undefined) { // Verifica se o id não é undefined
      task.completed = !task.completed;
      this.taskService.updateTask(task).subscribe();
    }
  }
  
}
