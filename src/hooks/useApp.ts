import { useContext } from 'react';
import { Context } from '../providers/AppProvider';

function useApp() {
  const context = useContext(Context);
  return context;
}
export default useApp;
