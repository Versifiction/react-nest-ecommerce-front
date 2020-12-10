import { Provider } from "react-redux";

import store from "./store";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
      </Provider>
    </div>
  );
}

export default App;
