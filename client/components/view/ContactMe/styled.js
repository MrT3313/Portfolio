import styled from '@emotion/styled'
import { Flex } from '../../structural'

export const Container = styled(Flex)`
  label: CONTACT_CONTAINER;
  
  .contact {
    margin-right: 7px;

    :last-child{
      margin-right: 0;
      color: blue;
    };
  };
`