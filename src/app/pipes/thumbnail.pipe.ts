import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {



    transform(value: any, args?: any): any {
        let size: number;

        const temp = value.split('.');

        switch (args) {

            case 'small':
                size = 160;
                break;

            case 'medium':
                size = 320;
                break;

            case 'large':
                size = 640;
                break;

            default:
                size = 320;
                break;

        }

        return temp[0] + '-tn' + size + '.png';

    }

}
