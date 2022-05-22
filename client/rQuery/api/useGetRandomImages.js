import { useQuery } from 'react-query';
import { get } from '../../request'; 

const useGetRandomImages = ({
  page = 1, 
  limit = 30
}) => {
  return useQuery(
    ["random-images", page, limit],
    async () => {
      const res = await get({
        url: `https://picsum.photos`, 
        endpoint: `v2/list`,
        params: `page=${page}&limit=${limit}`
      })

      return res
    }
  )
}

export default useGetRandomImages;