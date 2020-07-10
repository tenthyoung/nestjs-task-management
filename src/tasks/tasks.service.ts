import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from "./task.model";
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        console.log(this.tasks);
        return this.tasks.find(task => task.id === id)
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuid(),
            title, 
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        console.log(this.tasks);
        return task;
    }

    updateTask(id, key, value): Task {
        let updatedTask = this.getTaskById(id);
        if (updatedTask === null || updatedTask === undefined) {
            console.log("Error: No task found");
        }

        updatedTask[key] = value;

        this.tasks.forEach(task => {
            if (task.id === id) {
                
            }
        })

        return updatedTask;
    }
    
    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    
}