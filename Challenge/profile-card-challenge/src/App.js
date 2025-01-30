import logo from "./logo.svg";
import "./App.css";
function Name() {
  return (
    <>
      <h1> I Nyoman Budhiarta Suputra</h1>
    </>
  );
}

function Avatar() {
  return (
    <>
      <img src="../avatar.jpeg" />
    </>
  );
}

function Intro() {
  return (
    <>
      <h3>
        A beginer front end developer that learn from basic to be a real front
        end developer. I join many course at Udemy to improve my skills and to
        mastered what i start. From now i want to consisten push my project to
        github and learn many mini project to boost my portofolio. THIS IS MY
        JOURNEY
      </h3>
    </>
  );
}

function App() {
  return (
    <div>
      <Avatar />
      <Name />
      <Intro />
    </div>
  );
}

export default App;
