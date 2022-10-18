import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    @font-face 
    {
      font-family: 'Satoshi';
      /* font-weight: 100 900; */
      font-display: swap;
      font-style: normal;
      font-named-instance: 'Regular';
      src: url(/fonts/Satoshi-Regular.woff) format("woff");
    }

    @font-face 
    {
      font-family: 'SatoshiBold';
      /* font-weight: 100 900; */
      font-display: swap;
      font-style: normal;
      font-named-instance: 'Bold';
      src: url(/fonts/Satoshi-Bold.woff) format("woff");
    }

    @font-face 
    {
      font-family: 'SatoshiBlack';
      font-display: swap;
      font-style: normal;
      font-named-instance: 'Black';
      src: url(/fonts/Satoshi-Black.woff) format("woff");
    }

  }

body {
  background: ${(props) => props.theme.colors.greyOne};
  font-family: 'Satoshi', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', sans-serif;
}

h1 {
  font-family: 'SatoshiBlack','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', sans-serif;
  font-size: 80px;

  ${(props) => props.theme.sizes.tablet} {
  font-size: 70px;
  }

  ${(props) => props.theme.sizes.mobile} {
    font-size: 60px;
  }
}

h2 {
  font-family: 'SatoshiBold','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', sans-serif;
  font-size: 32px;

  ${(props) => props.theme.sizes.tablet} {
  font-size: 30px;
  }

  ${(props) => props.theme.sizes.mobile} {
    font-size: 28px;
  }
}

h3 {
  font-family: 'SatoshiBold','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', sans-serif;
  font-size: 28px;

  ${(props) => props.theme.sizes.tablet} {
  font-size: 26px;
  }

  ${(props) => props.theme.sizes.mobile} {
    font-size: 24px;
  }
}

p {
  font-size: 17px;

  ${(props) => props.theme.sizes.tablet} {
  font-size: 16px;
  }

  ${(props) => props.theme.sizes.mobile} {
    font-size: 14px;
  }
}

span {
  font-size: 15px;

  ${(props) => props.theme.sizes.tablet} {
  font-size: 14px;
  }

  ${(props) => props.theme.sizes.mobile} {
    font-size: 13px;
  }
}


li {
  font-size: 16px;
}
`;

export default GlobalStyle;
