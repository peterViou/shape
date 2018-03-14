import {animate, group, query, style} from '@angular/animations';

// export function TranslateX( name: string, x: string, duration: number ) {
//   return trigger( name, [
//     state('false', style({ transform: 'translateX(0)' }) ),
//     state('true',  style({ transform: 'translateX(' + x + ')' }) ),
//     transition('0 => 1', animate( duration + 'ms ease-in')),
//     transition('1 => 0', animate( duration + 'ms ease-out')),
//   ]);
// }
// export const slideIn = trigger('slideIn', [
//   state('*', style({
//     transform: 'translateX(100%)',
//   })),
//   state('in', style({
//     transform: 'translateX(0)',
//   })),
//   state('out',   style({
//     transform: 'translateX(-100%)',
//   })),
//   transition('* => in', animate('600ms ease-in')),
//   transition('in => out', animate('600ms ease-in'))
// ]);

export const slideLeft = [
  query(':leave', style({position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)'}), {optional: true}),
  query(':enter', style({
    position: 'absolute',
    left: 0,
    right: 0,
    transform: 'translate3d(-100%,0,0)'
  }), {optional: true}),
  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(100%,0,0)'})), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(0%,0,0)'})),
    ]), {optional: true})
  ])
];

export const slideRight = [
  query(':leave', style({position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)'}), {optional: true}),
  query(':enter', style({
    position: 'absolute',
    left: 0,
    right: 0,
    transform: 'translate3d(100%,0,0)'
  }), {optional: true}),

  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(-100%,0,0)'})), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(0%,0,0)'})),
    ]), {optional: true})
  ])
];

export const fadeOut = [
  query(':leave', style({position: 'absolute', left: 0, right: 0, opacity: 1}), {optional: true}),
  query(':enter', style({position: 'absolute', left: 0, right: 0, opacity: 0}), {optional: true}),

  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({opacity: 0})), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({opacity: 1})),
    ]), {optional: true})
  ])
];
