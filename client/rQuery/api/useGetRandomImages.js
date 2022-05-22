import { useQuery } from 'react-query';
import { get } from '../../request'; 

const useGetRandomImages = () => {
  return useQuery(
    ["random-images"],
    async () => {
      return get({
        url: `https://picsum.photos/v2`, 
        endpoint: `list`
      })
    }
  )
}

export default useGetRandomImages;