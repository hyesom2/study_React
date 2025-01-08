import MemoList from "./MemoList";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar({ memos }) {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <MemoList memos={memos} />
      <SidebarFooter />
    </div>
  );
}
