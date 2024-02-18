/**
 * title: 在任意两个值之间切换
 * desc: 接受两个可选参数，在它们之间进行切换。
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'yanhuo-hooks';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>Effects：{state}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="primary" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>
          Set Hello
        </Button>
        <Button type="primary" onClick={() => set('World')}>
          Set World
        </Button>
        <Button type="primary" onClick={setLeft} style={{ margin: '0 8px' }}>
          Set Left
        </Button>
        <Button type="primary" onClick={setRight}>
          Set Right
        </Button>
      </p>
    </div>
  );
};
