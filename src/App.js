import "./App.css"
import { UseEffectCompo } from "./UseEffectCompo";
import { UseMemoCompo } from "./UseMemoCompo";
import UseReducer from "./UseReducer";
import { UsingContext } from "./UsingContext";


const App=()=> {
  
  return (
    <div className="App">
       <UseEffectCompo/>
       <UseMemoCompo/>
       <UsingContext/>
       <UseReducer/>
    </div>
  );
}

export default App;
