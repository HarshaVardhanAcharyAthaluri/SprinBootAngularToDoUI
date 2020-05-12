import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@Component({
  selector: 'app-task',
  templateUrl:'task.component.html'
})
export class TaskComponent{

 public task:any={};
 public tasks:any=[];
  constructor(private taskService:TaskService) { }
  getTask(id){
    this.tasks=[];
    this.taskService.getTask(id).subscribe(data=>this.task=data);
  }

  getallTasks(){
    this.task={};
    this.taskService.getAllTasks().subscribe(data=>this.tasks=data);

  }

}
