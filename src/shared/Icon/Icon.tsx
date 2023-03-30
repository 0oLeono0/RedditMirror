import React from 'react';
import { BlockIcon } from '../Icons';
import { CommentIcon } from '../Icons';
import { MenuIcon } from '../Icons';
import { WarningIcon } from '../Icons';
import { SaveIcon } from '../Icons';
import { ShareIcon } from '../Icons';
import { IconAnon } from '../Icons';
import styles from './icon.css';
import classNames from 'classnames';

const LIST = {
  block: BlockIcon,
  menu: MenuIcon,
  warning: WarningIcon,
  save: SaveIcon,
  share: ShareIcon,
  comment: CommentIcon,
  anon: IconAnon,
};

export enum EIcon {
  block = 'block',
  menu = 'menu',
  warning = 'warning',
  save = 'save',
  share = 'share',
  comment = 'comment',
  anon = 'anon',
}

interface IIconsProps {
  name: EIcon;
  size?: number;
}

export interface IIconProps {
  size?: number;
}

export function Icons({ name, size }: IIconsProps) {
  const classes = classNames({ [styles[`size${size}`]]: size });
  const IconComponent = LIST[name];
  return <IconComponent size={size} />;
}