import { trigger, state, style, transition, animate,keyframes } from '@angular/core';

export const fly = trigger('fly', [
   transition('* => void', [
  style({
      opacity: 0.5
  }),
  animate('500ms ease-in')
]),
    transition('void => *', [
  style({
      opacity: 0.5
  }),
  animate('500ms ease-in')
])
  ])
