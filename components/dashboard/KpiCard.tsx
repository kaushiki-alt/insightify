import { Card, CardDescription, CardTitle } from '../ui/card'

type KpiCardProp = {
    title : string;
    data: number;
}
const KpiCard = ({title, data}: KpiCardProp) => {
  return (
    <Card className='kpicard p-4 h-24 gap-2'>
        <CardTitle className='text-lg'>{title}</CardTitle>
        <CardDescription className='text-md'>{data}</CardDescription>
    </Card>
  )
}

export default KpiCard

// can add the pie charts as ref.png