import React from 'react';

const colors = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink',
];

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const TailwindColorTest = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Tailwind Color Test</h1>
      {colors.map((color) => (
        <div key={color} className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </h2>
          <div className="flex flex-wrap">
            {shades.map((shade) => (
              <div
                key={`${color}-${shade}`}
                className="m-1 flex h-24 w-24 items-center justify-center"
              >
                <div className={`h-20 w-20 bg-${color}-${shade} flex items-center justify-center`}>
                  <span className="font-mono text-xs">{shade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TailwindColorTest;
