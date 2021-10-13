import "./App.css";
import Content from "./components/Content";
import Image from "./components/Image";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import useStore from "./store";

function App() {
  const pageNumber = useStore((state) => state.pageNumber);
  const setLoading = useStore((state) => state.setLoading);
  const json = useStore((state) => state.rawJSON);
  const setJSON = useStore((state) => state.setJSON);

  useEffect(async () => {
    setLoading(true);
    try {
      // I directly gave the client id and secrete here, but I would be making a production version of this app I would most probably use environment variables to store them.
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=${pageNumber}&query=office&client_id=MrsptAEkuNtiOj9sakWFD9PmsE7roU5qo4Zub6CQgSk&client_secret=F19zKmUGoRQy1QY-FfEodfvh6jKPORIaDZLM7GHL_Nw`
      );
      console.log(res.data);
      if (json) setJSON([...json, ...res.data.results]);
      else setJSON(res.data.results);
      console.log("images loaded 📷");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [pageNumber]);

  return (
    <Router>
      <Switch>
        <Route exact path="/image/:id">
          <Image />
        </Route>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
