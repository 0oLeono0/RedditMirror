import React from 'react';
import {
  BlockIcon,
  CommentIcon,
  MenuIcon,
  WarningIcon,
  ShareIcon,
  SaveIcon,
  IconAnon,
  KarmaIcon,
  CodeIcon,
  ImageIcon,
  DocumentIcon,
  DownloadIcon,
  ProfileIcon,
  UpdateIcon,
  LinkIcon,
  MikroIcon,
  DiscussIcon,
  PenIcon,
  TransliteIcon,
  PDFIcon,
} from '../Icons';
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
  karma: KarmaIcon,
  code: CodeIcon,
  image: ImageIcon,
  document: DocumentIcon,
  donwload: DownloadIcon,
  profile: ProfileIcon,
  update: UpdateIcon,
  link: LinkIcon,
  micro: MikroIcon,
  discuss: DiscussIcon,
  pen: PenIcon,
  translite: TransliteIcon,
  PDF: PDFIcon,
};

export enum EIcon {
  block = 'block',
  menu = 'menu',
  warning = 'warning',
  save = 'save',
  share = 'share',
  comment = 'comment',
  anon = 'anon',
  karma = 'karma',
  code = 'code',
  image = 'image',
  document = 'document',
  donwload = 'donwload',
  profile = 'profile',
  update = 'update',
  link = 'link',
  micro = 'micro',
  discuss = 'discuss',
  pen = 'pen',
  translite = 'translite',
  PDF = 'PDF',
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