import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Router from "./Router";
import {useApiError} from "./hooks/common/error/useApiError";
import {QueryClient, QueryClientProvider} from "react-query";
import {RecoilRoot} from "recoil";

function App() {

    const { handleError } = useApiError();

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0,
                onError: err => handleError(err),
            },
        }
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <RecoilRoot>
                        <GlobalStyles/>
                        <Router/>
                    </RecoilRoot>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
