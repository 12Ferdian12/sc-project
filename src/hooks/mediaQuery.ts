import { useEffect, useState } from "react";

export default function useMediaQuery(initalQuery: string) {
  //  example initalQuery (min-width: 768px)
  const [query, setQuery] = useState(initalQuery);
  const [matches, setMatches] = useState(false);
  // check query and listen for media change.
  useEffect(() => {
    if (!query) return;

    const _onChange = (mql: MediaQueryListEvent) => {
      // (min-width: 768px)
      setMatches(mql.matches);
    };

    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    try {
      mql.addEventListener("change", _onChange);
    } catch {
      mql.addListener(_onChange);
    }

    return () => {
      try {
        mql.removeEventListener("change", _onChange);
      } catch {
        mql.removeListener(_onChange);
      }
    };
  }, [query]);

  return [matches, setQuery] as const;
}
