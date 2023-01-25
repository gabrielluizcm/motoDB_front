import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const PictureWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MotorcyclePicture = styled.label`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.glassBackground};
  border: 2px solid ${colors.glassBorder};
  overflow: hidden;
  border-radius: 5px;
  margin: 20px 10px 0 0;

  img {
    width: auto;
    height: 100px;
    border-radius: 5px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${colors.secondary};
  }
`;
