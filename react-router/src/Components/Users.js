import { Outlet, Link, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter");

  return (
    <div>
      {showActiveUsers ? (
        <h2>Showing active users..</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
      <h3>
        <Link to="1">User 1</Link>
      </h3>
      <h3>
        <Link to="2">User 2</Link>
      </h3>
      <h3>
        <Link to="3">User 3</Link>
      </h3>
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Active users
      </button>
      <button
        onClick={() => {
          setSearchParams({});
        }}
      >
        Reset filter
      </button>
      <hr />
      <Outlet />
    </div>
  );
};
