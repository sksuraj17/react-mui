import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'> This is H1 Heading</Typography>
        <Typography variant='h2'> This is H2 Heading</Typography>
        <Typography variant='h3'> This is H3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom> This is H4 Heading</Typography>
        <Typography variant='h5'> This is H5 Heading</Typography>
        <Typography variant='h6'> This is H6 Heading</Typography>

        <Typography variant='subtitle1'> This is Subtitle 1</Typography>
        <Typography variant='subtitle2'> This is Subtitle 2</Typography>

        <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem quas aliquid earum alias nesciunt qui neque assumenda, error facilis! Voluptates accusantium suscipit maxime quod! Cupiditate esse eaque praesentium dicta!</Typography>
        <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam accusamus! Iusto quidem qui inventore! Laboriosam corrupti, quasi at voluptate nesciunt ab, deserunt maxime harum unde odit molestias blanditiis necessitatibus.</Typography>
    </div>
  )
}
