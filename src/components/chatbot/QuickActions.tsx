import React from 'react';

interface QuickActionsProps {
  onSelect: (action: string) => void;
}

const quickActions = [
  { id: 'term', label: 'Term Insurance' },
  { id: 'health', label: 'Health Insurance' },
  { id: 'riders', label: 'Policy Riders' },
  { id: 'claims', label: 'Claims Process' },
];

export function QuickActions({ onSelect }: QuickActionsProps) {
  return (
    <div className="p-4 border-t border-gray-100">
      <p className="text-sm text-gray-600 mb-2">Quick Actions:</p>
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onSelect(action.label)}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full 
                     hover:bg-blue-100 hover:text-blue-700 transition-colors"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}