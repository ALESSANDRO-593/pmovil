import "./card.css";

interface Props {
  title: string;
  text: string;
}

export default function CardItem({ title, text }: Props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
