import { useRef, useState } from "react";
import { NavigationContext } from "../contexts/navigationContext";

const sections = [
  { id: "hero" },
  { id: "sobre" },
  { id: "contato" },
  { id: "projetos" },
];

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    if (idx < 0 || idx >= sections.length) return;

    setAnimating(true);
    setCurrent(idx);

    setTimeout(() => {
      setAnimating(false);
    }, 800);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 40) dy > 0 ? goTo(current + 1) : goTo(current - 1);
    touchStartY.current = null;
  };

  return (
    <NavigationContext.Provider
      value={{
        current,
        animating,
        sections,
        goTo,
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
