import React from 'react';
import { ArrowUpRight, Shield, Heart, Wallet } from 'lucide-react';
import { StatCard } from './StatCard';

const stats = [
  {
    icon: Shield,
    title: 'Active Policies',
    value: '3',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Heart,
    title: 'Health Score',
    value: '85%',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Wallet,
    title: 'Premium Due',
    value: '₹24,500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: ArrowUpRight,
    title: 'Claims Status',
    value: '1 Active',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  }
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}