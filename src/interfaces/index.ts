export type IpropsWithChildren<T = {}> = Partial<T> & {
    children?: React.ReactNode;
};
  