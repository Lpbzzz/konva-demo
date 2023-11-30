import './App.css';
import {Layer, Rect, Stage} from "react-konva";

function App() {
  return (
    <div className="App" style={{width:'500px',height:'500px',border:'1px solid #ccc'}}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect x={20} y={20} width={100} height={100} fill="red" shadowBlur={10} />
            </Layer>
        </Stage>
    </div>
  );
}

export default App;
