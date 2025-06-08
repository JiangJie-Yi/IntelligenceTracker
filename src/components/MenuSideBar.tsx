import React, { JSX, useState, useEffect } from 'react';
import { Flex, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import SideButton from './SideButton';
import Logo from './Logo';
import { MenuSideBarProps } from './menuSideType';

export default function MenuSideBar({ onCollapse }: MenuSideBarProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    let collapsedTimer: NodeJS.Timeout;
    if (isCollapsed) {
      collapsedTimer = setTimeout(() => {
        setIsFadeIn(true);
      }, 325);
    } else {
      setIsFadeIn(false);
    }
    return () => {
      if (collapsedTimer) {
        clearTimeout(collapsedTimer);
      }
    };
  }, [isCollapsed]);

  const handleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapse?.(newCollapsed);
  };

  // useEffect(() => {
  //   fetch('')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error();
  //       }
  //       return response.json();
  //     })
  //     .then((data: MenuItems[]) => {
  //       setMenuItems(data);
  //       setLoading(false);
  //     })
  //     .catch((error: Error) => {
  //       console.error('res: Error Message', error);
  //     });
  // }, []);

  return (
    <Flex
      vertical={true}
      align="center"
      justify="space-between"
      style={{
        width: isCollapsed ? '100%' : 'fit-content',
        height: 'inherit',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 2,
        paddingRight: 2,
        background: '#151517',
        flex: '1 1 auto',
      }}
    >
      <Button
        type={'primary'}
        icon={
          isCollapsed ? (
            <RightOutlined
              style={{ fontSize: 15, margin: 'auto', opacity: isHovered ? 1 : 0.325 }}
            />
          ) : (
            <LeftOutlined
              style={{ fontSize: 15, margin: 'auto', opacity: isHovered ? 1 : 0.325 }}
            />
          )
        }
        onClick={handleCollapse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          gridTemplateColumns: isCollapsed ? '100%' : '1fr 2fr',
          width: isCollapsed ? 85 : 60,
          height: 58,
          marginRight: 0,
          marginLeft: 'auto',
          borderTopLeftRadius: isCollapsed ? 2 : 4,
          borderTopRightRadius: isCollapsed ? 2 : 4,
          borderBottomRightRadius: isCollapsed ? 2 : 4,
          borderBottomLeftRadius: isCollapsed ? 2 : 20,
          transition: '.325s linear',
          outline: 'none',
        }}
      />
      <Flex
        vertical={true}
        gap={2}
        style={{
          width: 'inherit',
        }}
      >
        <SideButton collapsed={isCollapsed} fadeIn={isFadeIn} />
      </Flex>
      <Logo collapsed={isCollapsed} fadeIn={isFadeIn} />
    </Flex>
  );
}
