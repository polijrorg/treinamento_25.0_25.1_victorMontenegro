import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/default.theme';

interface AppProviderProps {
    children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

export default AppProvider;
