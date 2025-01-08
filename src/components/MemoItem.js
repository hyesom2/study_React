// export default function MemoItem({ children, index, setSelectedMemoIndex }) {
export default function MemoItem({ children, onClick, isSelected }) {
  return (
    <li
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClick}
      // onClick={() => {
      //   setSelectedMemoIndex(index);
      // }}
    >
      {children}
    </li>
  );
}
