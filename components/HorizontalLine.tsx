export default function HorizontalLine({ color, height, width }) {
  return (
    <hr
      style={{
        border: 'none',
        height: height,
        width: width,
        color: color,
        backgroundColor: color
      }}
    />
  );
}
