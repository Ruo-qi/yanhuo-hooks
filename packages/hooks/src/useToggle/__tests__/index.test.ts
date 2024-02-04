import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

const callSetLeft = (hook: any) => {
  act(() => {
    hook.result.current[1].setLeft();
  });
};

const callSetRight = (hook: any) => {
  act(() => {
    hook.result.current[1].setRight();
  });
};

describe('useToggle', () => {
  it('没有入参', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('一个参数', async () => {
    const hook = renderHook(() => useToggle('Hello'));
    expect(hook.result.current[0]).toBe('Hello');
    callToggle(hook);
    expect(hook.result.current[0]).toBeFalsy();
    callSetLeft(hook);
    expect(hook.result.current[0]).toBe('Hello');
    callSetRight(hook);
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('两个参数', async () => {
    const hook = renderHook(() => useToggle('Hello', 'World'));
    expect(hook.result.current[0]).toBe('Hello');
    callToggle(hook);
    expect(hook.result.current[0]).toBe('World');
    callSetLeft(hook);
    expect(hook.result.current[0]).toBe('Hello');
    callSetRight(hook);
    expect(hook.result.current[0]).toBe('World');
  });
});
