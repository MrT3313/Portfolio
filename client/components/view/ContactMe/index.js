// components
import { Flex, IconWrapper, ExternalLink, MailTo } from '../../structural';
// styles
import * as S from './styled';

// consts
import { colors, contactItems } from '../../../consts';

const ContactMe = () => {
  // methods
  const IconFactory = (item) => (
    <IconWrapper size="24px" color={colors.WHITE}>
      <item.icon />
    </IconWrapper>
  );

  return (
    <S.Container>
      {contactItems.map((item, i) => {
        return (
          <Flex 
            key={i}
            className="contact"
          >
            {item.title !== 'Email' ? (
              <ExternalLink to={item.data}> 
                {IconFactory(item)}
              </ExternalLink>
            ) : (
              <MailTo email={item.data}>
                {IconFactory(item)}
              </MailTo>
            )}
          </Flex>
        );
      })}
    </S.Container>
  );
};

export default ContactMe;