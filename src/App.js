import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MemoContainer from "./components/MemoContainer";

export default function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo1",
      content: "this is memo1",
      createdTime: "1736305630047", // 생성된 시간 new Date().getTime();
      updatedTime: "1736305630047", // 변경된 시간
    },
    {
      title: "memo2",
      content: "this is memo2",
      createdTime: "1836305630047", // 생성된 시간 new Date().getTime();
      updatedTime: "1836305630047", // 변경된 시간
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  function setMemo(newMemo) {
    // memos[selectedMemoIndex] = newMemo; // memos[0]이 newMemo로 교체된다.
    // console.log("memos", memos);
    // setMemos([...memos]);

    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  }

  return (
    <div className="App">
      <Sidebar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}
