import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./component";
import {Outlet} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? <div className="min-h-screen flex flex-wrap content-between bg-gray-500 text-white">
    <div className="w-full block">
      <Header />
      <main>
        <Outlet /> Main Content.
      </main>
      <Footer />
    </div>

  </div> : null
}

export default App;
