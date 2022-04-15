import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { AddedPlayerComponent } from '../added-player/added-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;
  gameID: string;
  gameOver = false;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore,  public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.gameID = params['id'];

      this.firestore.collection('games').doc(this.gameID).valueChanges().subscribe((game: any) => {
        this.game.currentPlayer = game.currentPlayer;
        this.game.playedCards = game.playedCards;
        this.game.players = game.players;
        this.game.playerImages = game.playerImages;
        this.game.stack = game.stack;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
      });
    })
    
  }

  newGame(){
    this.game = new Game();
  }
  

  takeCard() {
    if(this.game.stack.length == 0){
      this.gameOver = true;
    } else if(!this.game.pickCardAnimation){
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      //console.log(this.game);
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.saveGame();
      
      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1500);
    }
  }

  editplayer(playerID: number) {
    console.log('Edit Player' + playerID);

    const dialogRef = this.dialog.open(AddedPlayerComponent);
    dialogRef.afterClosed().subscribe((change: string) => {
      if(change){
        if(change == 'DELETE'){
          this.game.playerImages.splice(playerID, 1);
          this.game.players.splice(playerID, 1);
        } else{
          this.game.playerImages[playerID] = change;
          
        }
        this.saveGame();
      }
      
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && name.length > 0) {
        this.game.players.push(name);
        this.game.playerImages.push('1.webp')
        this.saveGame();
      }
    });
  }

  saveGame(){
    this.firestore.collection('games').doc(this.gameID).update(this.game.toJson());
  }

}
