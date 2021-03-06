import React from 'react';
import { modularScale } from 'polished';
import { Flex, Box } from 'grid-styled';
import { fontSize } from 'styled-system';

import Link from './Link';
import { Heading } from './Text';
import { colors } from '../style/utils';
import { Description } from './Text';

const LogoFlex = Flex.extend`
  text-align: center;
  ${fontSize}
`;

const Logo = ({ className, scales }) => {
  const fontSize = scales.map(scale => `${scale*20}px`);
  const iconHeight = `2em`;
  const iconWidth = `2.5em`;
  return (
    <LogoFlex
      className={className}
      fontSize={fontSize}
      direction='column'
    >
      <Flex 
        justify='center'
      > 
          <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 54.16 42.38" height={iconHeight} width={iconWidth}>
            <g rel="mainfill" name="symbol" transform="translate(-3.005319148936173,-8.83563818322851) scale(0.6010638297872338)">
              <path fill={colors.blue} d="M89.2,14.7H10.8c-3.2,0-5.8,2.7-5.8,6v58.5c0,3.3,2.6,6,5.8,6h78.4c3.2,0,5.8-2.7,5.8-6V20.7    C95.1,17.4,92.4,14.7,89.2,14.7z M10.8,18.7h78.4c1,0,1.8,0.9,1.8,2v44.1L66.9,35.8c-1.6-2-4.5-2-6.1,0L42.4,58.6    c-1.6,2-4.5,2-6.1,0l-8.2-9.9c-1.6-2-4.5-2-6.1,0L8.9,64.5V20.7C8.9,19.6,9.8,18.7,10.8,18.7z"/>
              <circle fill={colors.orange} cx="39.5" cy="32.7" r="8.1"/>
            </g>
          </svg>
          <Link to='/'>
            <Box ml={modularScale(-3)} as='span'>
              <Heading size={3}>
                Ethereum Canvas
              </Heading>
            </Box>
          </Link>
      </Flex>
      <Description size={0}>Draw on the blockchain</Description>
    </LogoFlex>
  )
}


Logo.defaultProps = {
  scales: [.5, .8],
}

export default Logo;