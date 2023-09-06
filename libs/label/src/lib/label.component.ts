import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  template: 'Meu Rótulo',
})
export class LabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Input() size: 's' | 'm' | 'l' = 's';
  // @Input() uiType: 'primary' | 'secondary' | 'tetriary' | 'quaternary' = 'primary';

  // @HostBinding('class') get classes(): string {
  //   return `ui-button ui-button--${this.size} ui-button--${this.uiType}`;
  // }
}
