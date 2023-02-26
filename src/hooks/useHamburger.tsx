import { useState } from "react";

export const useHamburger = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const navPassive = () => {
    setNavIsOpen(false);
  };

  return { navIsOpen, navPassive, toggleNav };
};
