import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  );
};

const App = () => {
  const isUserLoggedIN = true;

  return (
    <div className="App">
      <Person name="Junbeom" lastName="Doe" Age="30" />
      <Person name="Mary" lastName="Doe" Age="4" />
    </div>
  );
};

export default App;
