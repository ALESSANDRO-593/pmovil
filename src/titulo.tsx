interface Props {
  texto: string;
}

export default function Titulo({ texto }: Props) {
  return <h1 className="text-center mb-4">{texto}</h1>;
}
