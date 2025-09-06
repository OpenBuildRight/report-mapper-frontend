import {Card, Container, Grid, Paper, Stack, TextField} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from "@mui/material/Button";

const ObservationForm = () => {
    return (
        <Paper
            sx = {{
                alignItems: "center",
                alignContent: "center",
            }}
            elevation={1}
        >
            <Stack direction={"column"} spacing={2}>
                <Card
                    elevation={10}


                >
                    <TextField
                        required={true}
                        name={"Description"}
                        label={"Description"}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            name={"Observation Time"}
                            label={"Observation Time"}
                        />
                    </LocalizationProvider>
                </Card>
                <Card>
                    <TextField type="number"
                               name={"Latitude"}
                               label={"Latitude"}
                    />
                    <TextField type="number"
                               name={"Longitude"}
                               label={"Longitude"}
                    />
                </Card>

            </Stack>
            <Card>
                <Button variant={"outlined"}>Submit</Button>
            </Card>
        </Paper>
    )
}

export default ObservationForm