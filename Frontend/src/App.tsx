import { BrowserRouter } from "react-router-dom";
import "./App.css";
import store from "./pages/store/store";
import { Provider } from "react-redux";
import Router from "./routes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
