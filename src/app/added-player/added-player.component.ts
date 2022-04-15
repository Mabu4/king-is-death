import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-added-player',
  templateUrl: './added-player.component.html',
  styleUrls: ['./added-player.component.scss']
})
export class AddedPlayerComponent implements OnInit {

  allProfilePictures = ['1.webp', '2.png', 'monkey.png', 'pinguin.svg', 'serious-woman.svg', 'winkboy.svg'];

  constructor(public dialogRef: MatDialogRef<AddedPlayerComponent>) { }

  ngOnInit(): void {
  }

  // onNoClick(){
  //   this.dialogRef.close();
  // }

}
