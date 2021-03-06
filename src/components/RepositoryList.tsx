import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

export default function RepositoryList() {
  type Repository = {
    id: string
    name: string
    description: string
    html_url: string
  }

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
