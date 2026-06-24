import { useState, useEffect } from "react";
import type { Project } from "../types/projectType";

export function useRepositories(githubUsername: string) {
  const [repositories, setRepositories] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!githubUsername) return;

    setIsLoading(true);
    setError(null);
    setRepositories([]);

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((data) => setRepositories(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [githubUsername]);

  return { repositories, isLoading, error };
}
