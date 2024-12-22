import React from 'react';
import { Stats } from './dashboard/Stats';
import { RecommendedPolicies } from './dashboard/RecommendedPolicies';
import { PremiumCalculator } from './dashboard/PremiumCalculator';
import { PolicyComparison } from './dashboard/PolicyComparison';

export function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, John</h1>
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PremiumCalculator />
        <RecommendedPolicies />
      </div>
      <div className="mt-6">
        <PolicyComparison />
      </div>
    </div>
  );
}