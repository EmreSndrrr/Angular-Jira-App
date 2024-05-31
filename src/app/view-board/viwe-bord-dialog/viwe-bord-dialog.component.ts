import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viwe-bord-dialog',
  templateUrl: './viwe-bord-dialog.component.html',
  styleUrls: ['./viwe-bord-dialog.component.css'],
})
export class ViweBordDialogComponent implements OnInit {
  title: string = '';
  tasks: Array<string> = [''];
  tasksLoop: any = [false]
  constructor(private dialogRef: MatDialogRef<ViweBordDialogComponent>) {}

  ngOnInit(): void {}
  deleteTask(i:number){

  }
  addTask(){
    this.tasks.push("");
    this.tasksLoop.push(false);
  }
  close(){
    this.dialogRef.close()
  }
}
