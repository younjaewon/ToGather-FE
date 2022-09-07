
import { css, Global } from '@emotion/react';
import Reset from './styles/Reset';



const sizes: { [key: string]: number; } = {
	mobile: 320,
	tablet: 768,
	desktop: 1024
};



const GlobalStyle = () => {
  console.log(Reset)
  return (
  <Global styles={css`
    ${Reset()}
    * {
    font-family: 'Prompt', sans-serif;
  }

  #root{
    min-width: ${sizes.mobile};
    max-width: ${sizes.tablet};
    height:100%;
    margin: 0 auto;
    position:relative;
  }

  @media screen and (max-width: ${sizes.mobile}) {

  }
  media screen and (max-width: ${sizes.tablet}) {
    
  }
  media screen and (max-width: ${sizes.desktop}) {
    
  }
  `
  }
    
      />
  )
}



export default GlobalStyle;