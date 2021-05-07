import { ReactNode } from 'react';

export type ProviderProp = {
  children: ReactNode;
};

export type Action<T = any> = {
  type: T;
};
