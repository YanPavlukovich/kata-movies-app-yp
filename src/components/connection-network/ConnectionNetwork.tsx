import { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { removeError, setError } from '../../store/slices/error-slice';

function ConnectionNetwork(props: PropsWithChildren) {
  const { children } = props;
  const dispatch = useAppDispatch();

  const setNetworkError = () => {
    dispatch(
      setError({
        text: 'Connection Error',
        description: 'no internet connection',
        active: true,
      })
    );
  };
  const removeNetworkError = () => {
    dispatch(removeError());
  };

  useEffect(() => {
    window.addEventListener('offline', setNetworkError);
    window.addEventListener('online', removeNetworkError);

    return () => {
      window.removeEventListener('offline', setNetworkError);
      window.removeEventListener('online', removeNetworkError);
    };
  }, []);

  return <>{children}</>;
}

export default ConnectionNetwork;
