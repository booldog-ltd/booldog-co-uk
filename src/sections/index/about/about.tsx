import React from 'react';
import { ParagraphWithImage } from '../../../components/typography/paragraph';
import styles from './about.module.scss';
import team from './team.png';

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <section id='about' className={styles.about}>
      <ParagraphWithImage
        image={team}
        size='medium'
        title='Team made just right'
      >
        We’re an efficient and harmonious team of capable developers and
        designers with the strategy, tools, and skills to build comprehensive
        and intuitive digital products, notably improving people’s projects and
        experience.
      </ParagraphWithImage>
    </section>
  );
};
