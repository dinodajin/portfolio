import MonoLabel from "./MonoLabel";

export default function StatBox({ label, value, accent }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <MonoLabel>{label}</MonoLabel>
      <span style={{
        fontFamily: "'Pretendard Variable', sans-serif",
        fontSize: "15px",
        fontWeight: 700,
        color: accent || "#1a1a1a",
      }}>{value}</span>
    </div>
  );
}