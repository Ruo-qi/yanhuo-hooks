/**
 * title: 基础用法
 * desc: 使用 ref 设置需要全屏的元素
 */

import React, { useRef } from 'react';
import { useFullscreen } from 'yanhuo-hooks';
import { Button } from 'antd';

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);
  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <Button type="primary" onClick={enterFullscreen}>
          enterFullscreen
        </Button>
        <Button type="default" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
          exitFullscreen
        </Button>
        <Button type="primary" onClick={toggleFullscreen}>
          toggleFullscreen
        </Button>
      </div>
    </div>
  );
};
