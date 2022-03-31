import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./jeu.component.html",
  styleUrls: ["./jeu.component.css"]
})
export class JeuComponent {
  board: number[];
  actualPlayer: 1 | 2;
  winner = null;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.actualPlayer = 1;
    this.winner = null;
    this.numberTurn = 0;
    this.newGame();
  }

  makeMove(i) {
    if (!this.board[i] && !this.winner) {
      this.board[i] = this.actualPlayer;
      console.log(this.board);

      // TODO check winn
      this.winner = this.checkWin();
      this.nextPlayer();
    }
  }

  nextPlayer() {
    if (this.actualPlayer === 1) {
      this.actualPlayer = 2;
    } else {
      this.actualPlayer = 1;
    }
  }

  private numberTurn: number=0;

  checkWin() {
    this.numberTurn++;
    let winned = null;
    const victory = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [6, 4, 2]
    ];
    victory.forEach(x => {
      
  
      if (
        this.board[x[0]] === this.board[x[1]] &&
        this.board[x[0]] === this.board[x[2]]
      ) {
        console.log(this.board[x[0]]);
        winned = this.board[x[0]];
      }
    });

    for(let i = 0; i < victory.length; i++) {
      const idsToCheck = victory[i];
      console.log(idsToCheck[0]);
    }
    if (!winned && this.numberTurn===9){
      winned = "egalité";
    }
    return winned;
  }
}
