export default function MonoLabel({ children, style = {} }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "11px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#9A9890",
      ...style,
    }}>{children}</span>
  );
}