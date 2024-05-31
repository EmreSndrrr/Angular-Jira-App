import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { BoardService } from '../services/board.service';
import { MatDialog } from '@angular/material/dialog';
import { ViweBordDialogComponent } from './viwe-bord-dialog/viwe-bord-dialog.component';
@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  boardIndex:any=0;
  boardTitle:string="";
  constructor(private matDialog: MatDialog,private route:ActivatedRoute, public boardService:BoardService) { }
  
  ngOnInit(): void {
    
    this.boardIndex=  this.route.snapshot.paramMap.get('boardIndex');
    console.log(this.boardIndex)
    // console.log(this.boardService.boards[this.boardIndex].title)
    this.boardTitle = this.boardService.boards[this.boardIndex].title;
  
  }
  openNewCard(){
    const dialogRef = this.matDialog.open(ViweBordDialogComponent, {
      width: '500px'
    });
  }
  
}
