export default function MemoList({ memos }) {
  return (
    <div>
      <ul>
        {memos.map((memo, index) => {
          return <li key={index}>{memo.title}</li>;
        })}
      </ul>
    </div>
  );
}
