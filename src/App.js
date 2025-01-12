import { useState, useCallback } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MemoContainer from "./components/MemoContainer";
import { setItem, getItem } from "./lib/Storage";
import debounce from "lodash.debounce";

const debounceSetItem = debounce(setItem, 5000);

export default function App() {
  // const [memos, setMemos] = useState([
  //   {
  //     title: "memo1",
  //     content: "this is memo1",
  //     createdTime: "1736305630047", // 생성된 시간 new Date().getTime();
  //     updatedTime: "1736305630047", // 변경된 시간
  //   },
  //   {
  //     title: "memo2",
  //     content: "this is memo2",
  //     createdTime: "1836305630047",
  //     updatedTime: "1836305630047",
  //   },
  // ]);
  const [memos, setMemos] = useState(
    // JSON.parse(localStorage.getItem("memos")) || [],
    getItem("memos") || [],
  );
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  /*
  function setMemo(newMemo) {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
    // localStorage.setItem("memos", JSON.stringify(newMemos));
    // setItem("memos", newMemos);
    debounceSetItem("memos", newMemos);
  }
  */
  const setMemo = useCallback(
    (newMemo) => {
      // const newMemos = [...memos];

      // newMemos[selectedMemoIndex] = newMemo;

      // setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debounceSetItem("memos", newMemos);

        return newMemos;
      });
      // localStorage.setItem("memos", JSON.stringify(newMemos));
      // setItem("memos", newMemos);
      // debounceSetItem("memos", newMemos);
    },
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    const time = new Date().getTime();
    const newMemos = [
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdTime: time,
        updatedTime: time,
      },
    ];

    setMemos(newMemos);
    setSelectedMemoIndex(memos.length);
    debounceSetItem("memos", newMemos);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      // const newMemos = [...memos];
      // newMemos.splice(index, 1);

      // setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debounceSetItem("memos", newMemos);

        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(index - 1);
      }
    },
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <Sidebar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}
