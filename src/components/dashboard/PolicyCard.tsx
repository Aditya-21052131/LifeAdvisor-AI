import React from 'react';

interface PolicyCardProps {
  name: string;
  type: string;
  coverage: string;
  premium: string;
}

export function PolicyCard({ name, type, coverage, premium }: PolicyCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm text-gray-600">Coverage: {coverage}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold">{premium}</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}