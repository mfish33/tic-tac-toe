import { Component, OnInit } from '@angular/core';
import { BoardTrackerService } from '../board-tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public boardTracker:BoardTrackerService
  ) { }

  ngOnInit(): void {
  }

}
