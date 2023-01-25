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
      height: 100px;
      flex: 1;
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
  grid-template-columns: repeat(2, calc(50% - 7.5px));
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

  div {
    position: relative;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: ${colors.error};
      opacity: 40%;
    }
  }

  .realDelete {
    display: none;
    opacity: 100%;
  }

  div:hover {
    a {
      opacity: 100%;
    }
  }
`;
