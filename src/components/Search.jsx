import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Search.css";

const Search = ({ hideButtons = false, term }) => {
  const [{ }, dispatch] = useStateValue();
  const [input, setInput] = useState(term || "");
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [isSpeechInput, setIsSpeechInput] = useState(false);

  // Check for browser support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Set the recognition settings
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  // Start listening
  const startListening = () => {
    setIsListening(true);
    setIsSpeechInput(true);
    recognition.start();
  };

  // Stop listening
  const stopListening = () => {
    setIsListening(false);
    setIsSpeechInput(false);
    recognition.stop();
  };

  // Handle the result
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInput(transcript);
    console.log("Voice Input:", transcript); // Log the voice input as text
    stopListening();
  };

  // Handle errors
  recognition.onerror = (event) => {
    console.error(event.error);
    stopListening();
  };

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
          <a href="#" title="Search by voice" onClick={startListening}>
            <MicIcon style={{ color: isListening ? 'red' : '#76787C' }} />
          </a>
          <a href="https://www.google.co.in/imghp?hl=en&ogbl" title="Search by image">
            <CenterFocusStrongIcon style={{ color: '#76787C' }} />
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
