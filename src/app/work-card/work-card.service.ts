import {Injectable} from '@angular/core';

@Injectable()

export interface WorkCard {
    title: string;
    development: string;
    description: string;
    url: string;
    image: string;
    zoomAnim: boolean;
}

export class WorkCardService {
    getWorkCardData() {

        const workcard: WorkCard[] = [
            {
                title: 'Magebit 2',
                development: 'Graphic design',
                description: 'We have built a new web for IT professionals from Latvia',
                url: '/next-url',
                image: '../assets/image/graphics/crown-bg.jpg',
                zoomAnim: false,

            },

            {
                title: 'Magebit 3',
                development: 'Graphic design',
                description: 'We have built a new web for IT professionals from Latvia',
                url: '/next-url',
                image: '../assets/image/graphics/justio-bg.jpg',
                zoomAnim: false,

            },
                ];
        return workcard;
    }
}
