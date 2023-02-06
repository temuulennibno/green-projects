export default function Card({ image, title }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">{title}</div>
    </div>
  );
}
