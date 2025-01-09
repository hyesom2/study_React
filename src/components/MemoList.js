import MemoItem from "./MemoItem";

export default function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) {
  return (
    <ul>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          index={index}
          // setSelectedMemoIndex={setSelectedMemoIndex}
          isSelected={index === selectedMemoIndex}
          onClickAddMemo={() => setSelectedMemoIndex(index)}
          onClickDeleteMemo={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </ul>
  );
}
