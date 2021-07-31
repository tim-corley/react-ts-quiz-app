import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html {
    ${tw`h-full`}
  }
  body {
    ${tw`font-catamaran bg-cover bg-gradient-to-r from-black via-gray-900 to-gray-800`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
