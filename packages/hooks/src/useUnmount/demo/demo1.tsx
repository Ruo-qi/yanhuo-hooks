/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import { message } from 'antd';
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
      <button type="button" onClick={() => setState((state) => !state)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
