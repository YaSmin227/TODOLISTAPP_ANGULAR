import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  toDoListData: string[] = []
  taskName: string
  isChecked: boolean

  constructor() { }

  ngOnInit(): void {
  }
  AddItems() {
    if( this.taskName === undefined || this.taskName === ''){
      alert('input cant be empty')
    }else{
      console.log(this.taskName)
      this.toDoListData.push(this.taskName)
      this.taskName=''
    }
    
  }
  checked(event) {
    if (event.target.checked) {
      this.isChecked = true

    } else {
      this.isChecked = false
    }
    console.log(this.isChecked)
  }

  removeItem(i){
 
    this.toDoListData.splice(i,1)
  }
}
