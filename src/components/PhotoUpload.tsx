import {Card, ImageList, ImageListItem, ImageListItemBar, Paper, TextField} from "@mui/material"
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const PhotoUpload : React.FC = (

) => {
    const fileRef = React.useRef(null);
    const [files, setFiles] = useState<File[]>([]);
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFiles(Array.from(event.target.files));
        }
    }
    const removeFileByIndex = (indexToRemove: number) => {
        setFiles(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
    };

    return (
        <Paper>
            <Card elevation={10}>
                <div>Upload Photos</div>
                <input
                    type="file"
                    ref={fileRef}
                    multiple={true}
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) => {handleFileChange(e)}}
                />
                <ImageList>
                    {files.map((file, index) => (
                        <ImageListItem
                            sx={{
                                maxWidth: "200px",
                                maxHeight: "200px",
                            }}
                        >
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                key={index}
                            />
                            <ImageListItemBar
                                position={"top"}
                                actionIcon={
                                    <IconButton
                                        onClick={() => removeFileByIndex(index)}
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                }

                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Card>
        </Paper>
    )
}

export default PhotoUpload;