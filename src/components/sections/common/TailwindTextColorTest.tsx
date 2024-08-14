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

const TailwindTextColorTest = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Tailwind Text Color Test</h1>
      {colors.map((color) => (
        <div key={color} className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {shades.map((shade) => (
              <div key={`${color}-${shade}`} className="rounded border border-gray-200 p-2">
                <p className={`text-${color}-${shade} font-semibold`}>
                  {color}-{shade}
                </p>
                <p className={`text-${color}-${shade}`}>Sample Text</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TailwindTextColorTest;
