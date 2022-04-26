import { grabQuotes, getQuotes, thenGetQuotes } from "./services/promise-me";

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  }
  
  return (
    <>
      <button onClick={() => handleClick(grabQuotes)}>grabQuote</button>;
      <button onClick={() => handleClick(getQuotes)}>getQuote</button>;

      <button onClick={() => handleClick(thenGetQuotes)}>thenGetQuotes</button>;
  </>
  );
}
