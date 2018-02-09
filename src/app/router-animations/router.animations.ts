import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%'})
            , {optional: true}),
        query('.gallery', style({opacity: 0}), {optional: true}),
        query('.routes', style({opacity: 0}), {optional: true}),

        /* 2 */ group([  // block executes in parallel
            query(':enter', [
                style({transform: 'translateY(100%)'}),
                animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
            ], {optional: true}),
            query(':leave', [
                style({transform: 'translateX(0%)'}),
                animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
            ], {optional: true}),
            query(':enter .gallery', stagger(400, [
                style({transform: 'translateY(400px)'}),
                animate('1.5s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
            ]), {optional: true}),
            query(':enter .routes', stagger(400, [
                style({transform: 'translateY(400px)'}),
                animate('1.3s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
            ]), {optional: true}),
            query(':enter .searchbar', stagger(400, [
                style({transform: 'translateY(100px)'}),
                animate('1s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
            ]), {optional: true}),
        ])
    ])
]);
