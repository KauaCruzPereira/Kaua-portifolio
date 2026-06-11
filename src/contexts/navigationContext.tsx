import { createContext } from "react";

export type NavigationContextType = {
  current: number;
  animating: boolean;
  sections: { id: string }[];
  goTo: (idx: number) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
};

export const NavigationContext = createContext<NavigationContextType>(
  {} as NavigationContextType,
);
