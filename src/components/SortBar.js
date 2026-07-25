export default function SortBar({ setSortOrder }) {
  return (
    <div>
      <button onClick={() => setSortOrder('asc')}>Sort A–Z</button>
      <button onClick={() => setSortOrder('desc')}>Sort Z–A</button>
    </div>
  );
}
