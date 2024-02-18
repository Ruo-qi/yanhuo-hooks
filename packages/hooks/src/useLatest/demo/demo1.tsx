/**
 * title: 基础用法
 * desc: useLatest 返回的永远是最新值
 */

import React, { useState, useEffect } from 'react';
import { useLatest } from 'yanhuo-hooks';
export default () => {
  const [count, setCount] = useState(0);

  const latestCount = useLatest(count);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(latestCount.current + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
};
