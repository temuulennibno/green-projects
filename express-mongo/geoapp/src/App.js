import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import RestaurantScreen from "./screens/RestaurantScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RestaurantScreen />} />
      </Routes>
      <div className="fixed bottom-0 right-0 left-0 z-10 bg-gray-200 p-5">
        <nav>
          <ul className="flex items-center">
            <li>
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Find restruants
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Create
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
