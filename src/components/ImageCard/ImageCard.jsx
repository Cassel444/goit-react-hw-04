import css from "./ImageCard.module.css";

function ImageCard({ item: { description, likes, user, urls } }) {
  return (
    <div>
      <img src={urls.small} alt={description} />
      <p>{user.name}</p>
      <p>{description}</p>
      <p>{likes}</p>
    </div>
  );
}
export default ImageCard;
