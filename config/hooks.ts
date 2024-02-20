export const menus = [
  {
    title: '生命周期',
    children: ['useUnmount'],
  },
  {
    title: '状态',
    children: [
      'useToggle',
      'useCookieState',
      'useBoolen',
      'useDebounce',
      'useLocalStorageState',
      'useSessionStorageState',
      'useMap',
      'useSet',
      'useThrottle',
      'useRafState',
    ],
  },
  {
    title: 'Effect',
    children: ['useDebounceFn', 'useUpdateEffect', 'useThrottleFn'],
  },
  {
    title: 'DOM',
    children: [
      'useTitle',
      'useResponsive',
      'useKeyPress',
      'useEventListener',
      'useMouse',
      'useFullscreen',
      'useDocumentVisibility',
    ],
  },
  {
    title: '进阶',
    children: ['useMemoizedFn', 'useLatest'],
  },
];
