import { Component, OnInit } from '@angular/core';
import {IWorkCard} from './work-card-interface';
import {WorkCardService} from './work-card.service';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
    workdata: IWorkCard[];
    constructor(private workcarddata: WorkCardService) {
    }

    ngOnInit() {
        this.workdata = this.workcarddata.getWorkCard();
    }

}
