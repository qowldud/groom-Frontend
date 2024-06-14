import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import OrderList from "./orders-list/OrderList";

const OrderPage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to={"/"} replace />;
  return (
    <div className="page">
      <div className="container">
        <h1>주문 히스토리</h1>
        <OrderList />
      </div>
    </div>
  );
};

export default OrderPage;
