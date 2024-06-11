export interface HorizontalLineProps {
  color: string;
  height: string;
  width: string
}

export default function HorizontalLine({ color, height, width }: HorizontalLineProps) {
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
