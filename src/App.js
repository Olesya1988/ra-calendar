import { Calendar } from "./components/Calendar";
import './App.css';

const now = new Date();

export default function App() {
  return (
    <Calendar date={now} />
  );
}