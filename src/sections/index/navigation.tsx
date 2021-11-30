import React from 'react';
import { Item } from '../../components/navigation/item';
import { Navigation } from '../../components/navigation/navigation';

interface Props {}

export const IndexNavigation: React.FC<Props> = () => {
  return (
    <Navigation>
      <Item id='home' title='Welcome' />
      <Item id='about' title='Who we are' />
      <Item id='work' title='What we do' />
      <Item id='contact' title='Get in touch' />
    </Navigation>
  );
};
