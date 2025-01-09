export default function SidebarFooter({ onClick }) {
  return (
    <div className="SidebarFooter">
      <button
        type="button"
        className="SidebarFooter__add-button"
        onClick={onClick}
      >
        +
      </button>
    </div>
  );
}
