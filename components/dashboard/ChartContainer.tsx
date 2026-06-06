import React from 'react'
import RevenueChart from './RevenueChart'
import { ChartRevenue } from '@/lib/utils'
import CategoryChart from './CategoryChart';
import AovChart from './AovChart';

type ChartProps = {
  revenueData: ChartRevenue[];
  categoryData: ChartRevenue[];
  aovData: ChartRevenue[];
}
const ChartContainer = ({ revenueData, categoryData, aovData }: ChartProps) => {
  return (
    <div className="px-2 md:px-4 mt-6">
      <h2 className="font-medium text-lg tracking-tight lg:text-2xl">Performance Overview</h2>
      <div className='grid gap-2 mt-3'>

        <RevenueChart data={revenueData} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <CategoryChart data={categoryData} />
          <AovChart data={aovData} />
        </div>
      </div>
    </div>
  )
}

export default ChartContainer
