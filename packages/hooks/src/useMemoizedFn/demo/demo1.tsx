/**
 * title: 基础用法
 * desc: useMemoizedFn 与 useCallback 可以实现同样的效果。
 */
import React, { useState, useCallback } from 'react';
import { message, Button } from 'antd';
import { useMemoizedFn } from 'yanhuo-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    message.info(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <Button
        type="primary"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </Button>
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={callbackFn}>
          call callbackFn
        </Button>
        <Button type="primary" onClick={memoizedFn} style={{ marginLeft: 8 }}>
          call memoizedFn
        </Button>
      </div>
    </>
  );
};
