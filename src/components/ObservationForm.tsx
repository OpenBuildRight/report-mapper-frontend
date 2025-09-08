import {Card, Container, Grid, Paper, Stack, TextField} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from "@mui/material/Button";
import PhotoUpload from "./PhotoUpload";

const ObservationForm = () => {
    return (
        <Paper
            sx = {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                padding: 2,
            }}
            elevation={1}
        >
            <Stack direction={"column"} spacing={2}>
                <PhotoUpload/>
                <Card
                    elevation={10}
                    sx={{
                        padding: 2
                    }}
                >
                    <TextField
                        required={true}
                        name={"Description"}
                        label={"Description"}
                        fullWidth={true}
                        multiline={true}
                        sx={{}}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            name={"Observation Time"}
                            label={"Observation Time"}
                        />
                    </LocalizationProvider>
                </Card>
                <Card
                    elevation={10}
                    sx={{padding: 2}}
                >
                    <TextField type="number"
                               name={"Latitude"}
                               label={"Latitude"}
                    />
                    <TextField type="number"
                               name={"Longitude"}
                               label={"Longitude"}
                    />
                </Card>
                <Card
                    elevation={10}
                    sx={{padding: 2}}
                >
                    <Button variant={"outlined"}>Submit</Button>
                </Card>
            </Stack>
        </Paper>
    )
}

export default ObservationForm