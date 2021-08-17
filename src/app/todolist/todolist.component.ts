import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  toDoListData: {taskTitle:string,isActive:boolean}[] = []
  taskName: string
  isChecked: boolean

  constructor() { }

  AddItems() {
    if( this.taskName === undefined || this.taskName === ''){
      alert('input cant be empty')
    }else{
      console.log(this.taskName)
      this.toDoListData.push({taskTitle : this.taskName , isActive : false})
      this.taskName=''
    }
    
  }
  checked(i) {
    if (this.toDoListData[i].isActive===false) {
      this.toDoListData[i].isActive = true

    } else {
      this.toDoListData[i].isActive=false
    }
    
  }

  removeItem(i){
 
    this.toDoListData.splice(i,1)
  }
  
  ngOnInit(): void {
  }
}
