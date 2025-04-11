import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true, // Isso marca como standalone component
  imports: [CommonModule, FormsModule], // Adicione FormsModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Criar lista de tarefas', completed: true },
    { id: 3, title: 'Estilizar aplicação', completed: false },
  ];

  newTaskTitle = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleTaskCompletion(id: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
}
