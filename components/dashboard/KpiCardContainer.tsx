import KpiCard from './KpiCard'

type KpiData = {
    label: string;
    value: any;
}

const KpiCardContainer = ({data}:{data : KpiData[]}) => {
    
    return (
        <section className='kpicotainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
           { data.map((item) => {
            const {label, value} = item;
            return(
            <KpiCard key={label} title={label} data={value} />
            )
           })}
        </section>
    )
}

export default KpiCardContainer
