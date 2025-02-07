import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
} from 'recharts'

interface ChartProps {
  data: { date: string; value: number }[]
}

export const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false} />
        <XAxis
          dataKey="date"
          tickFormatter={(dateString) => {
            const date = new Date(dateString)
            return date.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
            })
          }}
          tick={{ fill: 'gray', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide={true} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1E88E5"
          strokeWidth={2}
          dot={{ fill: 'white', stroke: '#1E88E5', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
