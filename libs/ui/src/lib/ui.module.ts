import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiButtonModule } from './ui-button/ui-button.module';

@NgModule({
  imports: [CommonModule, UiButtonModule],
  exports: [UiButtonModule],
})
export class UiModule {}
