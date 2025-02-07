import { FC, useState } from 'react'
import { BotsGrid } from '../components/BotsGrid/botsgrid.component'
import { Layout } from '../components/Layout/layout.component'
import { TimeRangeSelector } from '../components/TimeRangeSelector/timeselector.component'
import { TradingCapital } from '../components/TradingCapital/tradingсapital.component'
import { useChartData } from '../hooks/useGetChartData'

type TimeRange = '24h' | '7d' | '30d' | 'all_time'
export const Dashboard: FC = () => {
  const [selected, setSelected] = useState<TimeRange | any>('all_time')
  const chartData = useChartData(selected)

  return (
    <Layout>
      <TradingCapital chartData={chartData} />
      <BotsGrid selectedTimeRange={selected} />
      <TimeRangeSelector selected={selected} setSelected={setSelected} />
    </Layout>
  )
}
