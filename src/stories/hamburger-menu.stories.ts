import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { HamburgerMenuComponent } from '../app/hamburger-menu/hamburger-menu.component';
import * as markdown from './notes/hamburger.notes.md';

storiesOf('Hamburger menu', module)
  .add('basic', () => ({
    component: HamburgerMenuComponent,
  }));