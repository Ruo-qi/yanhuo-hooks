import React from 'react';
import { Button } from 'antd';
import { useSet } from 'yanhuo-hooks';

export default () => {
  const [set, { add, remove, reset }] = useSet(['Hello']);

  return (
    <div>
      <Button type="primary" onClick={() => add(String(Date.now()))}>
        Add Timestamp
      </Button>
      <Button
        onClick={() => remove('Hello')}
        disabled={!set.has('Hello')}
        style={{ margin: '0 8px' }}
        danger
      >
        Remove Hello
      </Button>
      <Button type="default" onClick={() => reset()}>
        Reset
      </Button>
      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      </div>
    </div>
  );
};
