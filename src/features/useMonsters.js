import { useEffect, useState } from "react";

export function useMonsters(query) {
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMonsters() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(`https://www.dnd5eapi.co/api/monsters/`, {
            signal: controller.signal,
          });

          const data = await res.json();

          const filteredMonsters = data.results.filter((monster) =>
            monster.name.toLowerCase().includes(query.toLowerCase())
          );

          setMonsters(filteredMonsters);
        } catch (error) {
          console.error(error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 2) {
        setMonsters([]);
        setError("");
        return;
      }

      fetchMonsters();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { monsters, isLoading, error };
}
