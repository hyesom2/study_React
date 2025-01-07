import "./CourseCard.css";

export default function CourseCard(props) {
  return (
    <div className="CourseCard">
      <img src={props.img} alt={props.title} />
      <ul>
        {props.tag.map((tag, index) => {
          return (
            <li key={`${tag}-${index}`} className="tag">
              {tag}
            </li>
          );
        })}
      </ul>
      <h1 className="title">{props.title}</h1>
      <p className="price">{props.price.toLocaleString()}원부터</p>
      <ul>
        {props.type.map((type, index) => {
          return (
            <li key={`${type}-${index}`} className="type">
              {props.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
