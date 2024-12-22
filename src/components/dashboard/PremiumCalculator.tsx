import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculatePremium } from '../../utils/premiumCalculator';

export function PremiumCalculator() {
  const [formData, setFormData] = useState({
    age: 30,
    coverage: 1000000,
    term: 20,
    smoker: false,
  });
  const [premium, setPremium] = useState<number | null>(null);

  const handleCalculate = () => {
    const monthlyPremium = calculatePremium(formData);
    setPremium(monthlyPremium);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center mb-4">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Premium Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData(prev => ({ ...prev, age: Number(e.target.value) }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Coverage Amount (₹)</label>
          <select
            value={formData.coverage}
            onChange={(e) => setFormData(prev => ({ ...prev, coverage: Number(e.target.value) }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value={1000000}>10 Lakhs</option>
            <option value={2000000}>20 Lakhs</option>
            <option value={5000000}>50 Lakhs</option>
            <option value={10000000}>1 Crore</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Policy Term (Years)</label>
          <select
            value={formData.term}
            onChange={(e) => setFormData(prev => ({ ...prev, term: Number(e.target.value) }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[10, 15, 20, 25, 30].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="smoker"
            checked={formData.smoker}
            onChange={(e) => setFormData(prev => ({ ...prev, smoker: e.target.checked }))}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="smoker" className="ml-2 block text-sm text-gray-700">Smoker</label>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate Premium
        </button>

        {premium !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-gray-600">Estimated Monthly Premium:</p>
            <p className="text-2xl font-bold text-blue-600">₹{premium.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}