'use client'
import { Card } from '../ui/card'
import { ChartRevenue } from '@/lib/utils'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { BarChart,Bar, CartesianGrid, XAxis, YAxis } from 'recharts'

const AovChart = ({ data }: { data: ChartRevenue[] }) => {

    const chartConfig = {
        aov: {
            label: 'aov',
            color: '#2563eb',
        },
    } satisfies ChartConfig;
    return (
        <>
            <Card className='p-8 pl-6 rounded-sm shadow-sm border'>
                <div className="title text-center mb-6">
                    <h2 className='text-xl font-semibold tracking-tight capitalize'> Avg Order Value (Category) </h2>
                    <p className="text-sm text-muted-foreground mt-1">Top 5 categories</p>
                </div>

                <ChartContainer config={chartConfig} className='h-85 w-full'>
                    <BarChart data={data}  margin={{ bottom: 30 }}>
                        <CartesianGrid vertical={false} stroke="#e5e7eb"
                            strokeDasharray="3 3" />
                        <XAxis dataKey='label'
                            tickLine={false}
                            axisLine={false}
                            angle={90}      
                             textAnchor="start"                  />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            dataKey='aov' />
                        <ChartTooltip content={<ChartTooltipContent formatter={(value) =>
                            new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 2,
                            }).format(Number(value))
                        }
                        />
                        } />
                        <Bar
                            type='monotone'
                            dataKey='aov' fill="var(--color-aov)"
                            radius={4}
                        />
                    </BarChart>
                </ChartContainer>

            </Card>
        </>
    )
}

export default AovChart;
