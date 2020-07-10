import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    updateTask(value: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTaskById(id: string): void;
}
