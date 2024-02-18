/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'yanhuo-hooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="primary" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </Button>
        <Button type="primary" onClick={setRight}>
          Toggle True
        </Button>
      </p>
    </div>
  );
};
