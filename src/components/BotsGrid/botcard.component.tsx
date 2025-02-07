import { Box, Card, Typography } from '@mui/material'

type BotCardProps = {
  name: string
  percentage: number
  img: string
}

export const BotsCard = ({ name, percentage, img }: BotCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '120px',
        height: '120px',
        backgroundColor: '#1c273b',
        color: 'white',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <Box width={60} height={60}>
        <img src={img} className="bot_img" alt="bot-img" />
      </Box>
      <Typography fontSize="12px" fontWeight="bold" textAlign="center">
        {name}
      </Typography>
      <Typography fontSize="10px" color={percentage > 0 ? 'green' : 'red'}>
        {percentage ? `+${percentage}%` : ''}
      </Typography>
    </Card>
  )
}
