import { createTheme, ThemeProvider } from '@mui/material/styles';
import useTheme from '../Theme/useTheme';
import { GlobalStyles } from '@mui/material';

type Props = {
    children: React.ReactNode
}

const MaterialThemeProvider: React.FC<Props> = ({ children }) => {

    const { colors } = useTheme();
    const defaultTheme = createTheme({
        palette: {
            background: {
                default: colors.bg_primary
            },
            primary: {
                contrastText: colors.text_normal,
                main: colors.bg_secondary
            }
        },
        shape: {
            borderRadius: 5
        },
        components: {
            MuiInputBase: {
                styleOverrides: {
                    input: {
                        borderColor: colors.fa_primary
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles styles={{
                input: {
                    borderColor: colors.fa_primary
                }
            }} />
            {children}
        </ThemeProvider>
    );
}

export default MaterialThemeProvider;