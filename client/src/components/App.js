import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./StreamCreate";
import StreamShow from "./StreamShow";
import StreamDelete from "./StreamDelete";
import StreamEdit from "./StreamEdit";
import StreamList from "./StreamList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" exact component={StreamCreate} />
          <Route path="/streams/read" exact component={StreamShow} />
          <Route path="/streams/update" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
