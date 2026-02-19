"use client";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartRevenue } from '@/lib/utils';
import { Card } from '../ui/card';

const RevenueChart = ({ data }: { data: ChartRevenue[] }) => {

    const chartConfig = {
        revenues: {
            label: 'Revenue',
            color: '#2563eb',
        },
    } satisfies ChartConfig;

    return (
        <>
            <Card className='p-8 pl-6 rounded-sm shadow-sm border'>
                <div className="title text-center mb-6">
                    <h2 className='text-xl font-semibold tracking-tight capitalize'> Weekly Revenue Trend </h2>
                    <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
                </div>
                <ChartContainer config={chartConfig} className='h-75 w-full'>
                    <LineChart data={data}>
                        <CartesianGrid vertical={false} stroke="#e5e7eb"
                            strokeDasharray="3 3" />
                        <XAxis dataKey='label'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            dataKey='revenue' />
                        <ChartTooltip content={<ChartTooltipContent formatter={(value: number) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  }).format(value)
                        }
                        />
                        } />
                        <Line
                            type='monotone'
                            dataKey='revenue' stroke="var(--color-revenues)"
                            strokeWidth={2} dot={{ r: 4, strokeWidth: 2 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ChartContainer>
            </Card>
        </>

    )
}

export default RevenueChart
