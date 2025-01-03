import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

import Section from '@shared/Section';
import { parseISO, format, getDay } from 'date-fns';

const cx = classNames.bind(styles);

const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date);

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAY[getDay(weddingDate)]}</div>
    </Section>
  );
}
