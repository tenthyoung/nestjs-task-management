"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        console.log(this.tasks);
        return this.tasks.find(task => task.id === id);
    }
    createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = {
            id: uuid_1.v1(),
            title,
            description,
            status: task_model_1.TaskStatus.OPEN,
        };
        this.tasks.push(task);
        console.log(this.tasks);
        return task;
    }
    updateTask(id, key, value) {
        let updatedTask = this.getTaskById(id);
        if (updatedTask === null || updatedTask === undefined) {
            console.log("Error: No task found");
        }
        updatedTask[key] = value;
        this.tasks.forEach(task => {
            if (task.id === id) {
            }
        });
        return updatedTask;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map