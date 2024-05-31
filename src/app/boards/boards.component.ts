import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(private matDialog: MatDialog, public boardService:BoardService) { }

  ngOnInit(): void {
  }

  openNewBoardDialog() {
    const dialogRef = this.matDialog.open(BoardsDialogComponent, {
      width: '500px'
    });
  }
  deleteBoard(i:number){
    this.boardService.deleteBoard(i)
  }

}
