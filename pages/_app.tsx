import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import PlayerLayout from "../components/playerLayout";
import { StoreProvider } from "easy-peasy";
import { store } from "../lib/store";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5", 
      200: "#eeeeee",
      300: "#e0e0e0", 
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <StoreProvider store={store}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
