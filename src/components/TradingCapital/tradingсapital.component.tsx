import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Chart } from '../Chart/chart.component'

interface TradingCapitalProps {
  chartData: { date: string; value: number }[]
}

export const TradingCapital: FC<TradingCapitalProps> = ({ chartData }) => {
  return (
    <Box
      sx={{
        background: '#0a1f33',
        padding: '20px',
        borderRadius: '12px',
        color: 'white',
      }}
    >
      <Typography variant="body2" color="gray">
        TRADING CAPITAL
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        textAlign="center"
        mt={1}
      >
        <Typography variant="h4" fontWeight="bold">
          1.00865 BTC
        </Typography>
        <Box>
          <Typography variant="body2" color="gray">
            BALANCE: <strong style={{ color: 'white' }}>10 850</strong>
          </Typography>
          <Typography variant="body2" color="gray">
            ON HOLD: <strong style={{ color: 'white' }}>24 000</strong>
          </Typography>
        </Box>
      </Box>
      {/* График */}
      <Chart data={chartData} />
      <Typography variant="h5" fontWeight="bold" color="green" mt={1}>
        +32.6%
      </Typography>
    </Box>
  )
}
