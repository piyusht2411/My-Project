import { PropsWithChildren, createContext } from 'react';

type AppConfig = {
  token?: string;
};

export const Context = createContext<AppConfig>({});

function AppProvider(props: PropsWithChildren) {
  return <Context.Provider value={{ token: undefined }}>{props.children}</Context.Provider>;
}

export default AppProvider;
