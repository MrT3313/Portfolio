// components
import { Flex, Text } from '../../../structural';
import Image from 'next/image';
// styles

const EmailPrompt = () => {
	return (
		<Flex>
			<Flex 
				direction="column" 
				justify="center" align="center" 
				width="70px"
			>
				<Image
					src="/assets/icons/icons8-leftClick-52.svg" 
					width={50} height={50}
				/>
				<Text 
					as="div" 
					margin="10px 0 0 0"
				>
          Send Email
				</Text>
			</Flex>
			<Flex 
				direction="column" 
				justify="center" align="center" 
				width="70px"
			>
				<Image
					src="/assets/icons/icons8-rightClick-50.svg" 
					width={50} height={50}
				/>
				<Text 
					as="div" 
					margin="10px 0 0 0"
				>
          Copy Email
				</Text>
			</Flex>
		</Flex>
	);
};

export default EmailPrompt;