import { Component } from '@angular/core';
import { BoardTrackerService } from '../board-tracker.service'

@Component({
  selector: 'app-board-service',
  templateUrl: './board-service.component.html',
  styleUrls: ['./board-service.component.scss']
})
export class BoardServiceComponent {

  constructor(
    public boardTracker:BoardTrackerService
  ) { }

}
