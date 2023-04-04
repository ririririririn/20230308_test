export default function Header() {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <header>
      <h2>{dateStr}</h2>
      <p>해야할 일 : </p>
    </header>
  );
}
