import { useCallback, useState } from "react";
import Shape from "./components/Shape";
import { sleep } from "./utils/helpers";
export default function App() {
  const [clickOrder, setClickOrder] = useState([]);

  const handleBoxClick = useCallback(
    (boxIndex) => {
      setClickOrder((prev) => [...prev, boxIndex]);

      if (clickOrder.length === 8) {
        (async () => {
          for (let i = 0; i < 9; i++) {
            await sleep(500);
            setClickOrder((prev) => {
              prev.pop();
              return [...prev];
            });
          }
        })();
      }
    },
    [clickOrder]
  );

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="grid gap-2 grid-cols-3 w-fit">
        {Array.from({ length: 9 }, (_, i) => (
          <Shape
            key={i}
            name={i + 1}
            onBoxClick={() => handleBoxClick(i)}
            clicked={clickOrder.includes(i)}
          />
        ))}
      </div>
    </div>
  );
}
