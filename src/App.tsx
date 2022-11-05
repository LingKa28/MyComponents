import Pressable from "./components/Pressable/Pressable";
import "./App.less";

function App() {
  return (
    <Pressable
      color='hsl(0, 0%, 40%)'
      borderRadius="10px"
    >
      <div id="child" />
    </Pressable>
  );
}

export default App;
