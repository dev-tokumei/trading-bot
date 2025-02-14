import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const timeRanges = ['24h', '7d', '30d', 'all_time']

type TimeRangeSelectorPropsTypy = {
  selected: string
  setSelected: (range: string) => void
}

export const TimeRangeSelector: FC<TimeRangeSelectorPropsTypy> = ({
  selected,
  setSelected,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      mt={2}
      position="fixed"
      bottom={70}
      bgcolor={'#132840'}
      p={'10px'}
    >
      <Typography variant="body1" color="gray">
        Time Range:
      </Typography>
      <Box component="div" display="flex">
        {timeRanges?.map((range) => (
          <div
            key={range}
            onClick={() => setSelected(range)}
            style={{
              color: selected === range ? 'white' : '#4f5e74',
              borderColor: selected === range ? 'white' : '#4f5e74',
              fontWeight: selected === range ? 'bold' : 'normal',
              borderRadius: '20px',
              display: 'flex',
              margin: '3px',
              border: `1px solid ${selected === range ? 'white' : '#4f5e74'}`,
              padding: '6px 11px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            {range}
          </div>
        ))}
      </Box>
    </Box>
  )
}
