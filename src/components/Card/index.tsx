interface CardProps {
  title: string;
  desc: string;
  language: string;
  onClick: () => void;
}

const Card = ({ title, desc, language, onClick }: CardProps) => {
  return (
    <div className="card my-2 cursor-pointer" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title mb-4">{title}</h5>
        <p className="card-text mb-3">{desc}</p>
        <div className="mb-3">
          <p className="mb-1">Languages:</p>
          <div className={language}>{language}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
