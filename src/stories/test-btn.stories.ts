import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TestBtnComponent } from '../../src/app/test-btn/test-btn.component';

storiesOf('test-btn', module)
  .add('Chris', () => ({
    component: TestBtnComponent,
    props: {
      name: 'Chris',
      myEvent: action('Hello Chris!')
    },
  }))
  .add('Jane', () => ({
    component: TestBtnComponent,
    props: {
      name: 'Jane',
      myEvent: action('Hello Jane!')
    },
  }))
  .add('Doe', () => ({
    component: TestBtnComponent,
    props: {
      name: 'Doe',
      myEvent: action('Hello Joe!')
    },
  }));