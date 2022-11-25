import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Router from "./Router";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Router />
            </ThemeProvider>
        </>
    );
}

export default App;
