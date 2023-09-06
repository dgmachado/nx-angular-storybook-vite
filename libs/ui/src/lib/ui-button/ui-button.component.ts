import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'angular-storybook-ui-button',
  template: '<button>test button</button>  '
})
export class UiButtonComponent {
  @Input() size: 's' | 'm' | 'l' = 's';
  @Input() uiType: 'primary' | 'secondary' | 'tetriary' | 'quaternary' = 'primary';

  @HostBinding('class') get classes(): string {
    return `ui-button ui-button--${this.size} ui-button--${this.uiType}`;
  }
}
