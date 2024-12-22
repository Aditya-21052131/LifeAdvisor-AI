import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}

export function StatCard({ icon: Icon, title, value, bgColor, iconColor }: StatCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <Icon className={`h-8 w-8 ${iconColor} mb-2`} />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}