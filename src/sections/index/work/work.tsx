import React from 'react';
import { Box } from '../../../components/layout/box';
import {
  Paragraph,
  ParagraphWithIcon
} from '../../../components/typography/paragraph';
import backend from './backend.svg';
import people from './people.svg';
import projects from './projects.svg';
import webapps from './webapps.svg';
import styles from './work.module.scss';

interface Props {}

export const Work: React.FC<Props> = () => {
  return (
    <section id='work' className={styles.work}>
      <Box padding='large' spaceBetween>
        <Paragraph size='medium' title='What we do'>
          Services we provide and how we can work with you to turn your thoughts
          into a working product.
        </Paragraph>
        <div className={styles.box}>
          <ParagraphWithIcon
            icon={webapps}
            size='small'
            title='Web applications'
          >
            Fast, performant single-page web applications with great UX;
            tailored to your needs
          </ParagraphWithIcon>
          <ParagraphWithIcon
            icon={backend}
            size='small'
            title='Backend development'
          >
            Cutting-edge backend services built with industry-leading
            technologies
          </ParagraphWithIcon>
          <ParagraphWithIcon
            icon={projects}
            size='small'
            title='New & existing projects'
          >
            Starting from scratch or taking over the development of an
            unfinished project
          </ParagraphWithIcon>
          <ParagraphWithIcon
            icon={people}
            size='small'
            title='Staff augmentation'
          >
            A helping hand for existing teams and projects
          </ParagraphWithIcon>
        </div>
      </Box>
    </section>
  );
};
