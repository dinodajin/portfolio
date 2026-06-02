export default function Tag({ children, color = "#6B6B6B", bg = "#ECECEC" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "4px 10px",
      fontSize: "11px",
      fontFamily: "'JetBrains Mono', monospace",
      fontWeight: 500,
      background: bg,
      color,
      borderRadius: "4px",
      letterSpacing: "0.02em",
    }}>{children}</span>
  );
}