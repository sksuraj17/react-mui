import { Button } from "@mui/material"
import { Stack } from "@mui/material"

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" href='https://github.com/sksuraj17'>GitHub Text</Button>
            <Button variant="contained" href='https://github.com/sksuraj17'>GitHub Contained </Button>
            <Button variant="outlined" href='https://github.com/sksuraj17'>gitHub Outlined </Button>
        </Stack>


    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='text' color='primary'>Primary</Button>
        <Button variant='text' color='secondary'>Secondary</Button>
        <Button variant='text' color='error'>Error</Button>
        <Button variant='text' color='warning'>Warning</Button>
        <Button variant='text' color='info'>Info</Button>
        <Button variant='text' color='success'>Success</Button>
    </Stack>
    <Stack spacing={2} direction='column'>
        <Button variant='outlined' color='primary'>Primary</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='outlined' color='error'>Error</Button>
        <Button variant='outlined' color='warning'>Warning</Button>
        <Button variant='outlined' color='info'>Info</Button>
        <Button variant='outlined' color='success'>Success</Button>
    </Stack>
    </Stack>
  )
}
