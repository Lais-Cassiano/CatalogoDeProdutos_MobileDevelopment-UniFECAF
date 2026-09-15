import { Login } from "@/src/screens/login/login";
import { Products } from "@/src/screens/products/products";
import { RootState } from "@/src/store";
import { useSelector } from "react-redux";

export default function Index() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Products />;
  }

  return <Login />;
}
