type RepositoryItemProps = {
  repository: {
    id: string
    name: string
    description: string
    html_url: string
  }
} 

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <li id={props.repository.id}>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>Acessar repositório</a>
      </li>
    </>
  );
}
