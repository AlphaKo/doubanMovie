import { trigger, state, style, transition, animate,keyframes } from '@angular/core';

export const fade = trigger('fade', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
       animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(0)', offset: 0}),
        style({opacity: 0.5, transform: 'rotate3d(1, 2.0, 3.0, 15deg)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
  ]),
  transition('* => void', [
        animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 0.5, transform: 'rotate3d(1, 2.0, 3.0, -15deg)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(0)',  offset: 1.0})
      ]))
  ])
]);