// import NumberCounter from "number-counter";
import NumberCounter from "react-countup";

function Counter({ end, delay }) {
  return (
    <div>
      <NumberCounter end={end} duration={delay} />
    </div>
  );
}

export default Counter;
