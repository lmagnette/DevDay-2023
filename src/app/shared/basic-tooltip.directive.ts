import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[basicTooltip]',
  standalone: true
})
export class BasicTooltipDirective {

  @Input() tooltipText: string = '';
  @Input() tooltipPlacement: string = 'top';
  @Input() tooltipDelay: number = 100;
  tooltip: HTMLElement|null = null;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, this.tooltipDelay);
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipText) // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.tooltipPlacement}`);

    // delay 설정
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.tooltipDelay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.tooltipDelay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.tooltipDelay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.tooltipDelay}ms`);
  }

  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip!.getBoundingClientRect();

    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.tooltipPlacement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.tooltipPlacement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.tooltipPlacement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.tooltipPlacement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

}
