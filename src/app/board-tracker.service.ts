import BoardSquare from './BoardSquare';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardTrackerService {

  public squares:BoardSquare[]
  private xIsNext:boolean
  public winner:string

  constructor() {
    let gameData = window.localStorage.getItem('board')
    if(gameData) {
      this.squares = JSON.parse(gameData)
      let xs = this.squares.filter(s => s =='X').length
      let os = this.squares.filter(s => s =='O').length
      this.xIsNext = xs == os
      this.calculateWinner()
    } else {
      this.newGame()
    }
  }

  private serializeBoard() {
    let json = JSON.stringify(this.squares)
    window.localStorage.setItem('board',json)
  }

  public newGame() {
    this.squares = new Array(9).fill('')
    this.xIsNext = true
    this.winner = ''
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'
  }

  public makeMove(idx:number) {
    if(this.squares[idx] || this.winner) {
      return
    }
    this.squares[idx] = this.player
    this.xIsNext = !this.xIsNext
    this.calculateWinner()
    this.serializeBoard()
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
