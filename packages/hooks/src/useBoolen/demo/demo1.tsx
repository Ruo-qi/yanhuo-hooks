import React from 'react';
import { Button } from 'antd';
import { useBoolen } from 'yanhuo-hooks';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolen(true);
  return (
    <div>
      <p>Effects：{JSON.stringify(state)}</p>
      <div>
        <Button onClick={toggle}>Toggle</Button>
        <Button onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </Button>
        <Button onClick={setTrue}>Set true</Button>
      </div>
    </div>
  );
};
