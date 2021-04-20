import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [translations, setTranslations] = useState([]);
  const url = "http://localhost:3000/translations";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTranslations(res.data);
      })
      .catch((error) => console.log(error));

    console.log(translations);
  }, [translations]);

  const translations_list = [
    {
      Title: "I like chocolate",
      Translations: [
        { text: "Imi place ciocolata", key: "RO" },
        { text: "I like chocolate", key: "ENG" },
        { text: "Jeg kan lide chokolade", key: "DA" },
      ],
      Id: 2,
    },
    {
      Title: "I like pizza",
      Translations: [
        { text: "Imi place pizza", key: "RO" },
        { text: "I like pizza", key: "ENG" },
        { text: "Jeg kan lide pizza", key: "DA" },
      ],
      Id: 2,
    },
    {
      Title: "Nobody's home",
      Translations: [
        { text: "Nimeni nu este acasa", key: "RO" },
        { text: "Nobody's home", key: "ENG" },
        { text: "Ingen er hjemme", key: "DA" },
      ],
      Id: 3,
    },
  ];

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      textAlign: "center",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={1}>
        <Card variant="outlined" style={{ margin: "10px 10px 10px 10px" }}>
          <CardContent>
            <h1>Cristian Sandu</h1>
            <h3>Number: 42403391</h3>
            <p>Email: cristianclaudiusandu@gmail.com</p>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="outlined" size="small" color="primary">
                Send E-mail
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        {translations_list.map((t) => {
          return (
            <Grid item xs={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="textPrimary" gutterBottom>
                    {t.Title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {" "}
                    {t.Translations.map((tr) => {
                      return (
                        <p>
                          {tr.key}, {tr.text}
                        </p>
                      );
                    })}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Typography>
                  <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="Translation"
                    defaultValue="Insert Translation Here..."
                    multiline
                    rows={6}
                    fullWidth={true}
                  />
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel
                      htmlFor="outlined-language-native-simple"
                      align="center"
                    >
                      Language
                    </InputLabel>
                    <Select
                      native
                      style={{ minWidth: "120px", maxHeight: "70px" }}
                    >
                      <option aria-label="None" value="" />
                      <option>ENG</option>
                      <option>DA</option>
                      <option>RUS</option>
                      <option>RO</option>
                      <option>DE</option>
                      <option>CHN</option>
                      <option>PT</option>
                      <option>ES</option>
                      <option>FR</option>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                  <Button
                    variant="outlined"
                    size="big"
                    color="primary"
                    className={classes.formControl}
                    style={{ margin: "15px" }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
