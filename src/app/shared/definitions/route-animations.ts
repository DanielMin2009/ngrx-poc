import {
  animate,
  group,
  style,
  transition,
  trigger,
  query,
} from '@angular/animations';

const baseStyles = style({
  width: '100%',
  height: '100%',
});

const easeInAnim = '300ms ease';
const easeOutAnim = '300ms 120ms ease';

export const ROUTE_SLIDE_STATE_TRIGGER = trigger('routeSlideState', [
  transition(':increment', [
    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            easeInAnim,
            style({
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            opacity: 1,
          }),
          animate(
            easeOutAnim,
            style({
              opacity: 0.5,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition(':decrement', [
    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            easeInAnim,
            style({
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            opacity: 1,
          }),
          animate(
            easeOutAnim,
            style({
              opacity: 0.5,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
