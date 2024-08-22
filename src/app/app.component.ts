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
    TaskFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public task = "";
  public items = ['item 1', 'item 2', 'item 3', 'item 4'];

  addTask() {
    this.items.push(this.task)
  }

  removeTask(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }

}
