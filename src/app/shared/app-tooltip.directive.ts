import { Directive } from '@angular/core';
import { BasicTooltipDirective } from './basic-tooltip.directive';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
  hostDirectives:[
    {
      directive: BasicTooltipDirective,
      inputs: [
        'tooltipText: tooltip',
        'tooltipPlacement: placement',
        'tooltipDelay: delay'
      ]
    }
  ]
})
export class AppTooltipDirective {

  constructor() { }

}
