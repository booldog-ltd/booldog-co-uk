import React from 'react';
import { PillButton } from '../buttons/pill-button';
import { Box } from '../layout/box';
import { Heading } from './headings';
import { Icon } from './icon';
import { Text } from './text';
import styles from './typography.module.scss';

interface Props {
  size: 'large' | 'medium' | 'small';
  title?: string;
  button?: { href?: string; text: string; onClick?: () => void };
}

export const Paragraph: React.FC<Props> = ({
  size,
  title,
  button,
  children
}) => {
  return (
    <>
      {title && <Heading size={size}>{title}</Heading>}
      <Text size={size}>{children}</Text>
      {button && <PillButton size={size} {...button} />}
    </>
  );
};

export const ParagraphWithIcon: React.FC<Props & { icon: string }> = ({
  icon,
  ...props
}) => {
  return (
    <div className={styles.withIcon}>
      <Icon src={icon} alt={`${props.title || ''} icon`} />
      <div>
        <Paragraph {...props} />
      </div>
    </div>
  );
};

export const ParagraphWithImage: React.FC<Props & { image: string }> = ({
  image,
  ...props
}) => {
  return (
    <div className={styles.withImage}>
      <div>
        <img src={image} alt={`${props.title || ''} illustration`} />
      </div>
      <Box padding='large' spaceBetween>
        <Paragraph {...props} />
      </Box>
    </div>
  );
};
