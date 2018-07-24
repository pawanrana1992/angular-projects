import { Component, OnInit } from '@angular/core';
import {IWorkCard} from '../work-card-interface';
import {WorkCardService} from '../work-card.service';

@Component({
  selector: 'app-work-masonry-card',
  templateUrl: './work-masonry-card.component.html',
  styleUrls: ['./work-masonry-card.component.scss'],
})
export class WorkMasonryCardComponent implements OnInit {
  workdata: IWorkCard[];
  constructor(private workcarddata: WorkCardService) {
  }

  ngOnInit() {
    this.workdata = this.workcarddata.getWorkCard();
  }
}
