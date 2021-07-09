import "../styles/globals.css";
import AuthState from "../context/auth/authState";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
    </QueryClientProvider>
  );
}

export default MyApp;
