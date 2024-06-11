export interface HorizontalLineProps {
  color: string;
  height: number;
  width: number
}

export default function HorizontalLine({ color, height, width }: HorizontalLineProps) {
  return (
    <hr
      style={{
        'border': 'none',
        'height': height,
        'width': width,
        'color': color,
        'backgroundColor': color
      }}
    />
  );
}
