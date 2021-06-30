/** @format */

import { StyledBurger } from './bugaerStyles';

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <section>
        <div />
        <div />
        <div />
      </section>
    </StyledBurger>
  );
};
