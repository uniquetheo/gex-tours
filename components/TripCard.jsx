const { AiFillAccountBook } = require("react-icons/ai");

const TripCard = ({ name, description }) => {
  return (
    // <div className="">
    <div className="bg-white p-5 shadow-md rounded-md">
      <AiFillAccountBook className="text-4xl text-primary" />
      <h1 className="text-2xl font-bold mt-5">{name}</h1>
      <p className="mt-3">{description}</p>
    </div>
    // </div>
  );
};

export default TripCard;
