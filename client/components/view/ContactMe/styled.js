import styled from '@emotion/styled'
import { Flex } from '../../structural'

export const Container = styled(Flex)`  
  label: CONTACT_ME_CONTAINER;
  
  .contact {
    margin-right: 35px;

    :last-child{
      margin-right: 0;
      color: blue;
    };
  };
`