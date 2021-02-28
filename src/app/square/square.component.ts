import { Component, Input, OnInit } from '@angular/core';
import BoardSquare from '../BoardSquare';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() value:BoardSquare

  constructor() { }

  ngOnInit(): void {
  }

}
