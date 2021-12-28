import { useState, useEffect } from "react";
import Keyword from "../components/Keyword";
import { Trash2 } from "react-feather";
import { emptyHistory, deleteCachedResults } from "../lib/storageService";
import Link from "next/link";

const History = () => {
  const [history, setHistory] = useState(null);

  const updateHistoryState = () => {
    const hst = JSON.parse(localStorage.getItem("history"));
    setHistory(hst);
  };

  const cleanHistory = () => {
    // empties localStorage
    emptyHistory();

    // empties cache
    deleteCachedResults();

    // updates component history state
    const hst = JSON.parse(localStorage.getItem("history"));
    setHistory(hst);
  };

  useEffect(() => updateHistoryState(), []);

  return (
    <div>
      <div className="flex items-center justify-around w-4/5 md:w-3/6 lg:w-2/6 mx-auto">
        <div className="text-center text-3xl text-gray-800">
          Latest keywords
        </div>
        <div
          className="cursor-pointer hover:scale-105 active:scale-125"
          onClick={cleanHistory}
        >
          <Trash2 color="gray" size={28} strokeWidth={1.5} />
        </div>
      </div>
      {history ? (
        <div className="my-10 w-11/12 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 mx-auto">
          {history.map((entry, index) => (
            <Link
              href={{ pathname: "/", query: { username: entry } }}
              passHref={true}
              key={index}
            >
              <div className="bg-gray-100 rounded-md shadow text-gray-800">
                <Keyword historyItem={entry} />
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default History;
