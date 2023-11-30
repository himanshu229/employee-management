import create from 'zustand';

type Store = Record<string, any>;

export const combineStores = <T extends Store, U extends Store>(
  store1: () => T,
  store2: () => U
) =>
  create<T & U>((set) => ({
    ...store1()(set),
    ...store2()(set),
  }));
