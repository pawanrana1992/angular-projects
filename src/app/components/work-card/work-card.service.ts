import {IWorkCard} from './work-card-interface';
import {Injectable} from '@angular/core';



@Injectable(
    {
        providedIn: 'root',
    }
)
export class WorkCardService {
    getWorkCard() {
        return [
            {
                title: 'Magebit 2',
                development: 'Graphic design',
                description: 'We have built a new web for IT professionals from Latvia',
                url: '/next-url',
                image: '../assets/image/graphics/crown-bg.jpg',
                zoomAnim: false,

            },

            {
                title: 'title',
                development: 'Graphic design',
                description: 'We have built a new web for IT professionals from Latvia',
                url: '/next-url',
                image: '../assets/image/graphics/justio-bg.jpg',
                zoomAnim: false
            },
            {
                title: 'title',
                development: 'Graphic design',
                description: 'We have built a new web for IT professionals from Latvia',
                url: '/next-url',
                image: '../assets/image/graphics/magebit-laptop.png',
                zoomAnim: true
            }
        ];
    }
}
