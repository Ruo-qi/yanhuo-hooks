/**
 * title: 将 state 存储在 localStorage 中
 * desc: 刷新页面后，可以看到输入框中的内容被从 localStorage 中恢复了。
 */

import React from 'react';
import { Input, Button } from 'antd';
import { useLocalStorageState } from 'yanhuo-hooks';

export default function () {
  const [message, setMessage] = useLocalStorageState<string | undefined>(
    'use-local-storage-state-demo1',
    {
      defaultValue: 'Hello~',
    },
  );

  return (
    <>
      <Input
        value={message || ''}
        placeholder="Please enter some words..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: 300 }}
      />
      <Button style={{ margin: '0 8px' }} onClick={() => setMessage('Hello~')}>
        Reset
      </Button>
      <Button danger onClick={() => setMessage(undefined)}>
        Clear
      </Button>
    </>
  );
}
