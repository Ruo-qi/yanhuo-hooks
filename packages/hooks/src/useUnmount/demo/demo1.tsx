/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import { message, Button } from 'antd';
import React, { useState } from 'react';
import { useUnmount } from 'yanhuo-hooks';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, setState] = useState(true);

  return (
    <>
      <Button type="default" danger={state} onClick={() => setState((state) => !state)}>
        {state ? 'unmount' : 'mount'}
      </Button>
      {state && <MyComponent />}
    </>
  );
};
