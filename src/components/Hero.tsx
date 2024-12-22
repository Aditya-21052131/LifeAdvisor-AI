import React from 'react';
import { Shield, Heart, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to SBI Life Insurance
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Securing your future with trust and reliability since 2001
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold">Protection for Loved Ones</h3>
              <p className="text-blue-100">Comprehensive coverage for your family</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold">Trusted by Millions</h3>
              <p className="text-blue-100">India's most reliable insurance provider</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p className="text-blue-100">Always here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}