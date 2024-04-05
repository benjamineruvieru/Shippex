import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {deleteItem} from '../services/storage';

interface UseApiProps<TData, TError> {
  queryKey: unknown[];
  queryFn: () => Promise<TData>;
  onSuccess?: (data: TData) => void;
}

export const useApi = <TData, TError>({
  queryKey,
  queryFn,
  onSuccess,
  ...rest
}: UseApiProps<TData, TError>) => {
  console.log('rest', rest);
  const navigation = useNavigation();
  const data = useQuery({
    queryKey,
    queryFn,
    onError: error => {
      switch (error?.response?.status) {
        case 401:
          {
            navigation.reset({
              index: 0,
              routes: [{name: 'SplashScreen'}],
            });
            deleteItem('loggedIn');
            deleteItem('name');
          }
          break;
        default:
          console.log(queryKey, ' errorr ', error?.response.data);
      }
    },
    onSuccess,
    ...rest,
  });

  return data;
};
