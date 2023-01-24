import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.glassBackground};
    border: 4px dashed ${colors.success};
    border-radius: 15px;
    margin: 15px auto;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 100px;
      height: 100px;
    }
  }

  input {
    display: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const PhotoAlbum = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 15px;

  div:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 2px solid ${colors.glassBorder};
  }
`;
