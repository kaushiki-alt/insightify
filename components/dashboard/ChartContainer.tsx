import React from 'react'
import RevenueChart from './RevenueChart'
import { ChartRevenue } from '@/lib/utils'
import CategoryChart from './CategoryChart';
import AovChart from './AovChart';

type ChartProps = {
    revenueData : ChartRevenue[];
    categoryData: ChartRevenue[];
    aovData : ChartRevenue[];
}
const ChartContainer = ({revenueData, categoryData, aovData}:ChartProps) => {
  return (
    <div className='p-4 mt-8'>
      <h2 className="font-medium text-2xl">Performance Overview</h2>
    <div className='grid gap-2 mt-3'>

      <RevenueChart data={revenueData} />
      <div className='grid md:grid-cols-2 gap-2'>
      <CategoryChart data={categoryData} />
      <AovChart data={aovData} />
      </div>
    </div>
    </div>
  )
}

export default ChartContainer
