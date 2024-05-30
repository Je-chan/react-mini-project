import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import { PropsWithChildren } from 'react';

const cx = classNames.bind(styles);

export default function Section({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <section className={cx(['container', className ?? ''])}>{children}</section>
  );
}
