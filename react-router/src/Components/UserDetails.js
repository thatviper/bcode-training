import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  console.log(params); // {userId : ...}
  const { userId } = params;

  return <div>Details about the user {userId}</div>;
};
