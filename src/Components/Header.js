import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles, createTheme, ThemeProvider} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useNavigate();
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
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography  
              onClick={() =>
                history("/")
              } 
              className={classes.title}
              variant="h5"
            >
              Cryptory
            </Typography>

            <Select 
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
};

export default Header;