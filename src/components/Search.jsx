import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
// import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput !== "") {
      console.log("Search Button Hit >>", trimmedInput);
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: trimmedInput,
      });
      navigate("/search");
    } else {
      console.log("Input is empty or contains only white spaces");
      alert("Input is empty or contains only white spaces");
    }
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="searchIcons">
          <a href="#" title="Search by voice">
            <img src="/src/assets/google_mic.svg" alt="mic" height="32" />
          </a>
          <a href="#" title="Search by image">
            <img src="/src/assets/lens_google.svg" alt="mic" height="32" />
          </a>
        </div>
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I&apos;m Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I&apos;m Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
