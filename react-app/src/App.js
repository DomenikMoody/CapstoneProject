import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import GetAllVideos from "./components/GetAllVideos";
import ManageProfile from "./components/ManageProfile";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SingleVideoPage from "./components/SingleVideoPage";
import GetAllPlaylist from "./components/GetAllPlaylist";
import PlaylistForm from "./components/CreatePlaylistForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/manage/:userid">
            <ManageProfile />
          </Route>
          <Route exact path="/" >
            <GetAllVideos />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/video/:videoid">
            <SingleVideoPage />
          </Route>
          <Route exact path="/playlist/all">
            <GetAllPlaylist />
          </Route>
          <Route exact path="/playlist/new">
            <PlaylistForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
