import { FastAverageColor } from 'fast-average-color'

const getAverageImageColor = async (url: string): Promise<string> => {
  const fastAverageColor = new FastAverageColor()
  const color = (await fastAverageColor.getColorAsync(url)).rgb

  return color
}

export default getAverageImageColor
