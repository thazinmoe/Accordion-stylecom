// import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>My Hero Academia: Top 5 Heroes</h1>
      <Accordion>
        {data.map((hero, index) => (
          <Accordion.Item key={index}>
            <Accordion.Header>
              <Accordion.Title>{hero.id}</Accordion.Title>
              <Accordion.Title>{hero.name}</Accordion.Title>
            </Accordion.Header>
            <Accordion.Body>
              <Accordion.Image src={hero.img} />
              <Accordion.Content>{hero.description}</Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default App;
