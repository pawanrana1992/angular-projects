import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
    slides = [
        {img: 'http://placehold.it/350x150/000000'},
        {img: 'http://placehold.it/350x150/111111'},
        {img: 'http://placehold.it/350x150/333333'},
        {img: 'http://placehold.it/350x150/666666'}
    ];
    slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1};

    constructor() {
    }

    ngOnInit() {
    }

    addSlide() {
        this.slides.push({img: 'http://placehold.it/350x150/777777'});
    }

    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }

    afterChange(e) {
        console.log('afterChange');
    }

}
