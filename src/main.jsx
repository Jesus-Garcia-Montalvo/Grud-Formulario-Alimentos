import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);
