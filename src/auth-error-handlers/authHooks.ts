import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';

export const useAuth = () => {
    const hasUser = useAppSelector((state) => state.auth.user);

    return hasUser;
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

