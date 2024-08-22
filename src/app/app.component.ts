import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import { TaskFormComponent } from "./task-form/task-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    FormsModule,
    TaskFormComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public items: string[] = ['item 1', 'item 2', 'item 3', 'item 4'];

  addTask(task: string) {
    if (task) {
      this.items.push(task);
    }
  }

  removeTask(task: string) {
    this.items = this.items.filter(item => item !== task);
  }
}
