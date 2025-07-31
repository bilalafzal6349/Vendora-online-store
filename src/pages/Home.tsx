import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <div>
      <Hero onShopNow={handleShopNow} />
    </div>
  );
};
export default HomePage;
