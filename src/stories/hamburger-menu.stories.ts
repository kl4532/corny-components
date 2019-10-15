import { storiesOf } from '@storybook/angular';
import { HamburgerMenuComponent } from '../app/hamburger-menu/hamburger-menu.component';
import * as markdown from './notes/hamburger.notes.md';

storiesOf('Hamburger menu', module)
  .add('basic', () => ({
    component: HamburgerMenuComponent,
  }));