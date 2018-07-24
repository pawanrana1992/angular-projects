import { Component, OnInit } from '@angular/core';
import {CardMockData, WorkCard, WorkCardService} from '../work-card.service';

@Component({
  selector: 'app-work-masonry-card',
  templateUrl: './work-masonry-card.component.html',
  styleUrls: ['./work-masonry-card.component.scss'],
  providers: [
    { provide: WorkCardService}
  ]
})
export class WorkMasonryCardComponent implements OnInit {

  workcard: WorkCard[];
  constructor(public cardService: WorkCardService) { }

  ngOnInit() {
    this.workcard = this.cardService.getWorkCardData();
  }

}
