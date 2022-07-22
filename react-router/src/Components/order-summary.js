import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Order confirmed!</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default OrderSummary;
