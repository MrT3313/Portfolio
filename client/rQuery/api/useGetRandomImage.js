import { useQuery } from 'react-query';
import { get } from '../../request'; 

const useGetRandomImage = (size =  200, grayscale = false) => {
  return useQuery(
    ["random-image"],
    async () => {
      const res = await get({
        url: `https://picsum.photos`, 
        endpoint: `${size}`,
        params: grayscale ? `grayscale` : null,
      })

      return res
    }
  )
}

export default useGetRandomImage;