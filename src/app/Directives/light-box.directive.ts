import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
  standalone: true,
})
export class LightBoxDirective implements OnChanges{

@Input('appLightBox')
 highlightColor:string='yellow';
 @Input()
 defaultColor:string='brown';

  constructor(private elemRefrence: ElementRef) {
  }
  ngOnChanges(): void {
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
