import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/home/main_nav";
import MainContent from "./components/home/main_content";
import GetNotebookForm from "./components/NotebookFormPage/GetNotebookForm";
import GetNoteForm from "./components/NoteFormPage/GetNoteForm";
import CreateNoteForm from "./components/NoteFormPage/CreateNoteForm";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
          <Navigation isLoaded={isLoaded} />
          <MainContent />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/notebooks">
            <GetNotebookForm />
          </Route>
          <Route path="/">
            <GetNoteForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;