// export default function MemoItem({ children, index, setSelectedMemoIndex }) {
export default function MemoItem({
  children,
  onClickAddMemo,
  onClickDeleteMemo,
  isSelected,
}) {
  return (
    <li
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickAddMemo}
      // onClick={() => {
      //   setSelectedMemoIndex(index);
      // }}
    >
      {children}
      <button
        type="button"
        className="MemoItem__delete-button"
        onClick={onClickDeleteMemo}
      >
        X
      </button>
    </li>
  );
}
