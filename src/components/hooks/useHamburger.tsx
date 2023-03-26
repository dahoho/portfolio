import { useState } from "react";

type Status = "open" | "close";

export const useHamburger = () => {
  const [navIsOpen, setNavIsOpen] = useState<Status>("close");

  const toggleNav = (): void => {
    setNavIsOpen((prev) => {
      return prev === "open" ? "close" : "open";
    });
  };

  const navPassive = (): void => {
    setNavIsOpen("close");
  };

  return { navIsOpen, navPassive, toggleNav };
};
