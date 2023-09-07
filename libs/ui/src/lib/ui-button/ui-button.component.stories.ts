import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { UiButtonComponent } from './ui-button.component';
import { LabelModule } from '@angular-storybook/label';

export default {
  title: 'UiButtonComponent',
  component: UiButtonComponent,
  decorators: [
    moduleMetadata({
     imports: [LabelModule],
    })
  ],
} as Meta<UiButtonComponent>;

const Template: Story<UiButtonComponent> = (args: UiButtonComponent) => ({
  component: UiButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    size:  's',
    uiType:  'primary',
}