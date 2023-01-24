import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Paragraph = styled.p`
  margin: 10px 0;
  text-align: justify;

  a {
    color: ${colors.info};
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Code = styled.code`
  p {
    margin-left: 15px;
  }
`;

export const Hr = styled.hr`
  border-color: ${colors.info};
  margin: 10px 0;
`;
