import Todoform from "./components/Todoform";
import { Provider } from "react-redux";
import { Store } from "./app/store";
import Todolist from "./components/Todolist";

function App() {
  return (
    <Provider store={Store}>
      <div className="text-center ">
        <Todoform />
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
