import { Provider } from "react-redux";
import "./App.css";
import { Outlet } from "react-router-dom";
import store from "./ReduxToolkit/store";


function App() {
  return (
    <>
    <Provider store={store}>
      <Outlet />
    </Provider>
    </>
  );
}

export default App;
