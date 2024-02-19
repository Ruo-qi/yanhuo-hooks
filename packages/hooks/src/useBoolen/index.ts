import { useMemo } from 'react';
import useToggle from '../useToggle';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

const useBoolen = (defaultValue = false): [boolean, Actions] => {
  const [state, { toggle, set }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return {
      setTrue,
      setFalse,
      set: (v) => set(!!v),
      toggle,
    };
  }, []);
  return [state, actions];
};

export default useBoolen;
