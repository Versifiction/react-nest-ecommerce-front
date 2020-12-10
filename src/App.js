import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import Router from "./Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
