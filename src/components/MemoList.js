import MemoItem from "./MemoItem";

export default function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
}) {
  return (
    <ul>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          index={index}
          setSelectedMemoIndex={setSelectedMemoIndex}
          onClick={() => setSelectedMemoIndex(index)}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </ul>
  );
}
