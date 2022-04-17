import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-play-rules',
  templateUrl: './play-rules.component.html',
  styleUrls: ['./play-rules.component.scss']
})
export class PlayRulesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlayRulesComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
