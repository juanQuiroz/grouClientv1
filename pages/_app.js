import "../styles/globals.css";
import "../styles/spinner.css";
import AuthState from "../context/auth/authState";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
