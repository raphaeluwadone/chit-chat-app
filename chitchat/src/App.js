import './App.css';
import ROUTES, { RenderRoutes } from "./routes/routes";
import Video from '../src/video/video.mp4'
import Templates from './components/Templates'

function App() {
  return (
    <div className="video-bg">
      <video autoPlay loop src={Video} muted type='video/mp4'></video>
      <Templates>
        <RenderRoutes routes={ROUTES}/>
      </Templates>
    </div>
  );
}

export default App;
