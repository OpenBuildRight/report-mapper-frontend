import {Card, Input, Paper, TextField} from "@mui/material"

const PhotoUpload = (

) => {
    return (
        <Paper>
            <Card elevation={10}>
                <div>Upload Photos</div>
                <TextField
                    type="file"
                    slotProps={
                        {
                            input : {
                                inputProps : {
                                    accept: "image/jpg, image/jpeg, image/png",
                                    multiple: true
                                }
                            }
                        }

                    }
                />
            </Card>
        </Paper>
    )
}

export default PhotoUpload;