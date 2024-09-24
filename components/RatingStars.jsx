import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MAX_STARS = 5;

// Generate star ratings
const RenderStars = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStars = rating % 1 !== 0 ? 1 : 0; // If rating is not a whole number, add half star
  const emptyStars = MAX_STARS - fullStars - halfStars; // Remaining stars

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <AiFillStar key={index} className="text-yellow-500" />
      ))}
      {halfStars === 1 && <AiFillStar className="text-yellow-500" />}{" "}
      {/* Can use half-star icon */}
      {[...Array(emptyStars)].map((_, index) => (
        <AiOutlineStar key={index} className="text-yellow-500" />
      ))}
    </>
  );
};

export default RenderStars;
