/**
 * title.zh-CN: 页面全屏
 */

import React, { useRef } from 'react';
import { Button } from 'antd';
import { useFullscreen } from 'yanhuo-hooks';

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { toggleFullscreen, enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  return (
    <div style={{ background: 'white' }}>
      <div ref={ref} style={{ background: '#A00', padding: 12 }}>
        <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
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
