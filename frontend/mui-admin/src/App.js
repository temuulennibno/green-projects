import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { CategoriesScreen, HomeScreen } from "./pages";

function App() {
  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories" element={<CategoriesScreen />} />
        </Routes>
      </Box>
    </Layout>
  );
}

export default App;
