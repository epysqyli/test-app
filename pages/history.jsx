import { useState, useEffect } from "react";
import Keyword from "../components/Keyword";

const History = () => {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    const hst = JSON.parse(localStorage.getItem("history"));
    setHistory(hst);
  }, []);

  return (
    <div>
      <div className="text-center text-3xl text-gray-800">Latest keywords</div>
      {history ? (
        <div className="my-10 w-11/12 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 mx-auto">
          {history.map((entry, index) => (
            <div key={index} className="border">
              <Keyword historyItem={entry} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default History;
