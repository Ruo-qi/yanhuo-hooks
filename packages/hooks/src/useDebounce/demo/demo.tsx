/**
 * title: 基础用法
 * desc: DebouncedValue 只会在输入结束 500ms 后变化。
 */

import React, { useState } from 'react';
import { Input } from 'antd';
import { useDebounce } from 'yanhuo-hooks';

export default () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <>
      <Input
        style={{ width: '500px' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="请输入..."
      />
      <div style={{ marginTop: '20px' }}>DebouncedValue: {debouncedValue}</div>
    </>
  );
};
