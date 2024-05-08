import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
  standalone: true,
})
export class LightBoxDirective {

@Input('appLightBox')
 highlightColor:string='yellow';
 @Input()
 defaultColor:string='gray';

  constructor(private elemRefrence: ElementRef) {
    this.elemRefrence.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.elemRefrence.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.elemRefrence.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
}
