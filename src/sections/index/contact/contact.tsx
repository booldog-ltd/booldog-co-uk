import React, { useRef } from 'react';
import { Field } from '../../../components/form/field';
import { FieldGroup } from '../../../components/form/field-group';
import { Form } from '../../../components/form/form';
import { Box } from '../../../components/layout/box';
import { Heading } from '../../../components/typography/headings';
import { Icon, IconGroup } from '../../../components/typography/icon';
import { Paragraph } from '../../../components/typography/paragraph';
import { Text } from '../../../components/typography/text';
import styles from './contact.module.scss';
import github from './github.svg';

interface Props {}

export const Contact: React.FC<Props> = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handler: Parameters<typeof Form>[0]['onSubmit'] = (event, form) => {
    event.preventDefault();
    form?.reset();
    setTimeout(
      () => alert("Mesasge sent! We'll get back to you as soon as we can."),
      300
    );
  };

  return (
    <>
      <section id='contact' className={styles.contact}>
        <Box padding='large' spaceBetween>
          <Paragraph title='Get in touch' size='medium'>
            Ready? We want to hear about your idea!
          </Paragraph>
          <div className={styles.items}>
            <Form onSubmit={handler}>
              <FieldGroup>
                <Field type='text' name='name' required />
                <Field type='text' name='email' required />
              </FieldGroup>
              <Field type='textarea' name='message' required />
              <Field type='submit' label='Send message' />
            </Form>
            <div className={styles.info}>
              <Paragraph size='small' title='Address'>
                International House
                <br />
                12 Constance Street
                <br />
                London
                <br />
                E16 2DQ
                <br />
                United Kingdom
              </Paragraph>
              <Paragraph size='small' title='Email'>
                <a href='mailto:contact@booldog.co.uk'>contact@booldog.co.uk</a>
              </Paragraph>
              <Heading size='small'>Social</Heading>
              <IconGroup>
                <a
                  href='https://github.com/booldog-ltd/'
                  target='_blank'
                  rel='noopener'
                  aria-label='GitHub Page'
                >
                  <Icon src={github} alt='GitHub logo' />
                </a>
              </IconGroup>
            </div>
          </div>
        </Box>
      </section>
      <footer className={styles.footer}>
        <Text size='xsmall'>
          &copy; {new Date().getFullYear()} BOOLDOG Limited. All rights reserved
        </Text>
        <Text size='xsmall'>
          Design by{' '}
          <a href='https://html5up.net/' target='_blank' rel='noopener'>
            HTML5 UP
          </a>
        </Text>
        <Text size='xsmall'>
          Background by{' '}
          <a href='https://svgbackgrounds.com' target='_blank' rel='noopener'>
            SVGBackgrounds
          </a>
        </Text>
      </footer>
    </>
  );
};
