import { Button } from "@mui/material"
import { Stack } from "@mui/material"
export const MuiButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Button variant="text">Text Button</Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
    </Stack>
  )
}
