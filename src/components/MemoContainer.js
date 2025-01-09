export default function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>메모가 없습니다.</h1>
        <p>새로운 메모를 추가해주세요.</p>
      </div>
    );
  }

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
