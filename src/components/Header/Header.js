import React, { useEffect, useState } from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import "./Header.css";
import countries from "../../data/category";
import { debounce } from "lodash";
import { connect } from "react-redux";
import {
  searchWord,
  clearDictionary,
} from "../../store/actions/wordSearchActions";
import { createTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const Header = ({ LightTheme, searchWord, clearDictionary }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  useEffect(() => {
    word !== "" && searchWord(category, word);
  }, [word, category, searchWord]);

  useEffect(() => {
    word.length === 0 && clearDictionary();
  }, [clearDictionary, word]);

  const handleChangeLanguage = (event) => {
    setWord("");
    setCategory(event.target.value);
  };

  const handleText = debounce((text) => {
    setWord(text);
  }, 1000);

  return (
    <div className="header">
      <span className="title">{"Dictionary App"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
          <Select
            native
            value={category}
            onChange={handleChangeLanguage}
            label="Duration"
            size="small"
            margin="dense"
            inputProps={{
              name: "duration",
              id: "outlined-staff-native-simple",
            }}
            className="select"
          >
            {countries.map((option) => (
              <option key={option.label} value={option.label}>
                {option.value}
              </option>
            ))}
          </Select>
        </ThemeProvider>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dictionary: state.dictionary,
});

const mapActionsToProps = {
  searchWord,
  clearDictionary,
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
