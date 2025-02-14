import { Grid } from '@mui/material'
import bot_red from '/red_bot.png'
import bot_green from '/green_bot.png'
import bot_grey from '/grey_bot.png'
import bot_blue from '/blue_bot.png'
import bot_yellow from '/yellow_bot.png'
import bot_orange from '/orange_bot.png'
import { useBotsData } from '../../hooks/useBotsData'
import { BotsCard } from './botcard.component'

const botImages: Record<string, string> = {
  red_bot: bot_red,
  green_bot: bot_green,
  white_bot: bot_grey,
  blue_bot: bot_blue,
  yellow_bot: bot_yellow,
  orange_bot: bot_orange,
}

export const BotsGrid = ({
  selectedTimeRange,
}: {
  selectedTimeRange: string
}) => {
  const data = useBotsData()
  if (!data) return null

  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      sx={{ mt: 4, mb: '180px' }}
    >
      {data.bots.map((bot: any, index: number) => (
        <Grid component="div" item key={index}>
          <BotsCard
            name={bot.name}
            percentage={bot[selectedTimeRange] || 0}
            img={botImages[bot.name] || bot_grey}
          />
        </Grid>
      ))}
    </Grid>
  )
}
