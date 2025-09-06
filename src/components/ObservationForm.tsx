import {Card, Container, Grid, Paper, TextField} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ObservationForm = () => {
    return (
        <Container>
            <Paper>
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
            </Paper>
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
        </Container>
    )
}

export default ObservationForm