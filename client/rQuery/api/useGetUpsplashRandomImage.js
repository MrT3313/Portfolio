import { useQuery } from 'react-query';
import { get } from '../../request'; 

const useGetUpsplashRandomImage = (count) => {
  let _params = `client_id=${process.env.UPSPLASH_ACCESS_KEY}`
  if (count) _params = `${_params}&count=5`

  return useQuery(
    ["upsplash", "random"],
    async () => {
      const res = await get({
        url: `https://api.unsplash.com`,
        endpoint: `photos/random`, 
        params: _params,
      })

      return res
    }
  )
}

export default useGetUpsplashRandomImage;