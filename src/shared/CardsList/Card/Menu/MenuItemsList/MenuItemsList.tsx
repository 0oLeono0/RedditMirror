import React from 'react';
import { EIcon, Icons } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
  postId: string;
  onClose?: () => void;
}

export function MenuItemsList({ postId, onClose }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icons name={EIcon.comment} size={15} />
        <Text size={14} color={EColor.grey99}>Коментарии</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icons name={EIcon.share} />
        <Text size={14} color={EColor.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icons name={EIcon.block} size={12} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icons name={EIcon.save} size={14} />
        <Text size={14} color={EColor.grey99}>Сохранить</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icons name={EIcon.warning} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>Пожаловаться</Text>
      </li>
      <li className={styles.menuItem} onClick={onClose}>
        <Text mobileSize={12} size={14} color={EColor.grey66}>Закрыть</Text>
      </li>
    </ul>
  );
}
