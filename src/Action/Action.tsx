import React, { ReactNode, useReducer } from 'react';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  Password: string;
  phone: number;
  city: string;
  gender: string;
};

interface State {
  value: FormData;
}

interface PrintUser {
  type: 'print';
  payload: FormData;
}
interface StateType {
  value: FormData;
}
interface Actions {
  printUser: (payload: FormData) => PrintUser;
}
type Action = PrintUser;

const printUser = (payload: FormData): PrintUser => ({
  type: 'print',
  payload
});

const actionUser: Actions = {
  printUser
};
export const initState: StateType = {
  value: { firstName: '', lastName: '', email: '', Password: '', phone: 0, city: '', gender: '' }
};
const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'print':
      return { ...state, value: action.payload };
  }
};

const AppContext = React.createContext<[StateType, Actions, React.Dispatch<any>] | null>(null);

export const ProviderUser = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <AppContext.Provider value={[state, actionUser, dispatch]}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) throw new Error('no context ');

  return context;
};
