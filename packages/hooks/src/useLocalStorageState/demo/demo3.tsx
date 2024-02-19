/**
 * title: 自定义序列化和反序列化函数
 * desc: 对于普通的字符串，可能你不需要默认的 `JSON.stringify/JSON.parse` 来序列化。
 */

import React from 'react';
import { Input, Button } from 'antd';
import { useLocalStorageState } from 'yanhuo-hooks';

export default function () {
  const [message, setMessage] = useLocalStorageState<string | undefined>(
    'use-local-storage-state-demo3',
    {
      defaultValue: 'Hello~',
      serializer: (v) => v ?? '',
      deserializer: (v) => v,
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
