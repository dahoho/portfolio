import { useState } from "react";

export const useHamburger = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const toggleNav = (): void => {
    setNavIsOpen((prev) => !prev);
  };

  const navPassive = (): void => {
    setNavIsOpen(false);
  };

  return { navIsOpen, navPassive, toggleNav };
};
