import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task.interface';


@Component({
  selector: 'app-task',
  templateUrl:'task.component.html'
})
export class TaskComponent{
 public task:any={};
 public tasks:any=[];
 public status:boolean=false;
 public show:boolean = false;
 public error:string;
 constructor(private taskService:TaskService) { }
  getTask(id){
    this.tasks=[];
    this.taskService.getTask(id).subscribe(data=>this.task=data);
  }

  getallTasks(){
    this.task={};
    this.taskService.getAllTasks().subscribe(data=>this.tasks=data);

  }

  statusMessage(msg){
    this.error = msg;
    console.log(this.error);
  }
creatTask(task:Task){
 
  this.taskService.createtask(task).subscribe(data => {
    task = data;
    this.status=true;
   
  }, (err) => this.statusMessage(err.message));
  
}

toggle() {
  this.show = !this.show;
}

}
