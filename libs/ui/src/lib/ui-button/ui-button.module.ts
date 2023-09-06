import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiButtonComponent } from './ui-button.component';
import { LabelModule } from '@angular-storybook/label';

@NgModule({
  declarations: [UiButtonComponent],
  imports: [CommonModule, LabelModule],
  exports: [UiButtonComponent],
})
export class UiButtonModule {}
