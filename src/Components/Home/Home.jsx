import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>

      <h1>This is home component</h1>

      {
        navigation.state === "loading" ? 
        <h2>Loading...</h2>:
        <Outlet></Outlet>

        

      }

      


    </div>
  );
};

export default Home;
