import MemoList from "./MemoList";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SidebarFooter onClick={addMemo} />
    </div>
  );
}
