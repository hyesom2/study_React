export default function MemoContainer({ memo, setMemo }) {
  return (
    <div className="MemoContainer">
      <div>
        <input
          type="text"
          className="MemoContainer__title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedTime: new Date().getTime(),
            });
          }}
        />
      </div>
      <textarea
        type="text"
        className="MemoContainer__content"
        value={memo.content}
        onChange={(e) => {
          setMemo({
            ...memo,
            content: e.target.value,
            updatedTime: new Date().getTime(),
          });
        }}
      />
    </div>
  );
}
