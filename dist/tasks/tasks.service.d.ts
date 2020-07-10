import { Task } from "./task.model";
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    updateTask(id: any, key: any, value: any): Task;
    deleteTask(id: string): void;
}
