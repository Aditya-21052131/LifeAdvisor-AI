import React from 'react';
import { PolicyCard } from './PolicyCard';

const recommendedPolicies = [
  {
    name: 'Smart Shield Plus',
    type: 'Term Insurance',
    coverage: '₹1 Cr',
    premium: '₹1,200/month'
  },
  {
    name: 'Health Elite',
    type: 'Health Insurance',
    coverage: '₹50 Lakhs',
    premium: '₹2,500/month'
  }
];

export function RecommendedPolicies() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recommended Policies</h2>
      <div className="space-y-4">
        {recommendedPolicies.map((policy, index) => (
          <PolicyCard key={index} {...policy} />
        ))}
      </div>
    </div>
  );
}