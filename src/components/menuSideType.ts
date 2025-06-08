import { ReactNode } from 'react';

export interface LogoProps {
  collapsed: boolean;
  fadeIn?: boolean;
}

export interface MenuSideBarProps {
  onCollapse?: (collapsed: boolean) => void;
}

export interface MenuItems {
  id: string | number;
  label: string;
  primary?: boolean;
  icon?: ReactNode;
  url: string;
}

export interface SideButtonProps {
  width?: number;
  height?: number;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  collapsed?: boolean;
  fadeIn?: boolean;
}
