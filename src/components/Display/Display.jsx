import React from 'react';
import { Container, Label, Info } from './Display.styles.js';

const Display = ({ dd, mm, yy }) => {
  return (
    <Container>
      <Label>
        <Info>{(yy !== null) | (yy !== undefined) ? yy : '--'}</Info> years
      </Label>
      <Label>
        <Info>{(mm !== null) | (mm !== undefined) ? mm : '--'}</Info> months
      </Label>
      <Label>
        <Info>{(dd !== null) | (dd !== undefined) ? dd : '--'}</Info> days
      </Label>
    </Container>
  );
};
export default Display;
