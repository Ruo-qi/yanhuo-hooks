import { useEffect, useState } from 'react';
import { DebounceOptions } from '../useDebounceFn/debounceOptions';
import useDebounceFn from '../useDebounceFn';

function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const { run } = useDebounceFn(() => {
    setDebouncedValue(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
