import { Calendar } from "./components/Calendar";
import './App.css';
import {HashRouter} from 'react-router-dom';

const now = new Date();

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Calendar date={now} />
    </HashRouter>    
  );
}