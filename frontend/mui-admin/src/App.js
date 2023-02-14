import { Box, Button } from "@mui/material";
import { Layout } from "./components/Layout";
import { useToast } from "./hooks";

function App() {
  const showToast = useToast();

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            showToast("Hello toast");
          }}
        >
          Toggle toast
        </Button>
      </Box>
    </Layout>
  );
}

export default App;
