import { Component, OnInit } from '@angular/core';
import BoardSquare from '../BoardSquare';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public squares:BoardSquare[]
  private xIsNext:boolean
  public winner:string

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  public newGame() {
    this.squares = new Array(9).fill('')
    this.xIsNext = true
    this.winner = ''
  }

  get player(): BoardSquare {
    return this.xIsNext ? 'X' : 'O'
  }

  public makeMove(idx:number) {
    if(this.squares[idx] || this.winner) {
      return
    }
    this.squares[idx] = this.player
    this.xIsNext = !this.xIsNext
    this.calculateWinner()
  }

  public calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winner = this.squares[a];
      }
    }
    if(!this.winner && this.squares.filter(x => x).length == 9) {
      this.winner = 'No one'
    }
  }

}
