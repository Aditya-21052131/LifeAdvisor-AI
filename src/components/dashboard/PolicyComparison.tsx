import React from 'react';
import { Scale } from 'lucide-react';
import { policyComparisons } from '../../utils/policyData';

export function PolicyComparison() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Scale className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Policy Comparison</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Elite Plan</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {policyComparisons.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feature.basic}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feature.premium}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feature.elite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}