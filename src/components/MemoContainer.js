export default function MemoContainer() {
  return (
    <div className="MemoContainer">
      <div>
        <input type="text" className="MemoContainer__title" />
      </div>
      <textarea type="text" className="MemoContainer__content" />
    </div>
  );
}
