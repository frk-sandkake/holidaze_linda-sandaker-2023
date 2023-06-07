import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useState } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuth = () => {
    const auth = useSelector((state: RootState) => state.auth);
    return auth;
};

export const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    const setStoredValue = (newValue: any) => {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue];
};
