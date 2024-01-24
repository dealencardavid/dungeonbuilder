import { useEffect, useState } from "react";

export function useMonstersDetails(monster) {
  const [monsterDetails, setMonsterDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMonsterDetails() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://www.dnd5eapi.co/api/monsters/${monster}`,
            {
              signal: controller.signal,
            }
          );

          const data = await res.json();

          setMonsterDetails(data);
        } catch (error) {
          console.error(error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchMonsterDetails();

      return function () {
        controller.abort();
      };
    },
    [monster]
  );

  return { monsterDetails, isLoading, error };
}
