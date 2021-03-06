import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Task } from './task/task.interface';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTask(id){
    return this.http.get('/task/'+id);
  }

  getAllTasks(){
    return this.http.get('/alltasks');
  }

  createtask(task:Task){
          return this.http.post<Task>('/task', task);
  }
}
