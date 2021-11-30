import React from 'react';
import { PillButton } from '../../../components/buttons/pill-button';
import { Box } from '../../../components/layout/box';
import { Heading } from '../../../components/typography/headings';
import logo from './booldog.svg';
import styles from './home.module.scss';

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <section className={styles.home} id='home'>
      <Box padding='large'>
        <img src={logo} alt='Logo' />
        <Heading size='large'>
          You said Project? Let’s build one!
          <br />
          Together.
        </Heading>
        <PillButton size='large' href='#about'>
          Get started
        </PillButton>
      </Box>
    </section>
  );
};
