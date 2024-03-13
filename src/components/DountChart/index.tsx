// DonutChart.js
import React from 'react';

const DonutChart = () => {
  const centerX = 50;
  const centerY = 50;
  const radius = 40;
  const strokeWidth = 20;
  const colors = ['#FF6384', '#36A2EB', '#FFCE56'];
  const values = [30, 40, 30];
  const sectionNames = ['Section A', 'Section B', 'Section C'];

  const calculateEndAngle = (startAngle: number, value: number) => startAngle + (value / 100) * 360;

  const createPath = (startAngle: number, endAngle: number) => {
    const startRadians = (startAngle * Math.PI) / 180 - Math.PI / 2;
    const endRadians = (endAngle * Math.PI) / 180 - Math.PI / 2;

    const x1 = centerX + radius * Math.cos(startRadians);
    const y1 = centerY + radius * Math.sin(startRadians);
    const x2 = centerX + radius * Math.cos(endRadians);
    const y2 = centerY + radius * Math.sin(endRadians);

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${endAngle - startAngle > 180 ? 1 : 0} 1 ${x2} ${y2}`;
  };

  let startAngle = 0;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      {values.map((value, index) => {
        const endAngle = calculateEndAngle(startAngle, value);
        const path = createPath(startAngle, endAngle);

        const textX =
          centerX +
          (radius + strokeWidth / 2) * Math.cos(((startAngle + endAngle) / 2) * (Math.PI / 180));
        const textY =
          centerY +
          (radius + strokeWidth / 2) * Math.sin(((startAngle + endAngle) / 2) * (Math.PI / 180));

        startAngle = endAngle;

        return (
          <g key={index}>
            <path d={path} fill="transparent" stroke={colors[index]} strokeWidth={strokeWidth} />
            <foreignObject x={textX - 30} y={textY - 15} width="60" height="30">
              <div style={{ textAlign: 'center' }}>{sectionNames[index]}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

export default DonutChart;
