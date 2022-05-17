import axios from "axios";
import { useState, useEffect } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../Pages/CryptoContext";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, TextField, Typography } from "@material-ui/core";

const CoinsTable = () => {
  const [coin, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency ..."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        >

        </TextField>
      </Container>
    </ThemeProvider>
  )
};

export default CoinsTable