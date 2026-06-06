import { ReactNode } from 'react';
import { Card, CardDescription, CardTitle } from '../ui/card'

type KpiCardProp = {
    title : string;
    data: ReactNode;
}
const KpiCard = ({title, data}: KpiCardProp) => {
  return (
    <Card className='kpicard p-3 md:p-4 gap-2 flex flex-row justify-between items-center'>
        <CardTitle className=' text-sm lg:text-md capitalize font-medium'>{title}</CardTitle>
        <CardDescription className=' text-md lg:text-lg text-primary capitalize font-bold'>{data}</CardDescription>
    </Card>
  )
}

export default KpiCard

// can add the pie charts as ref.png