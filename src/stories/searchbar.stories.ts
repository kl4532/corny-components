import { storiesOf } from '@storybook/angular';
import { SearchbarComponent } from '../app/searchbar/searchbar.component';

storiesOf('Searchbar', module)
  .add('basic', () => ({
    component: SearchbarComponent,
}));