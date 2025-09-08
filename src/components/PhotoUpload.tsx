import {Card, ImageList, ImageListItem, ImageListItemBar, Paper} from "@mui/material"
import React, {RefObject, useState} from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface PhotoUploadState {
    files: File[];
}

interface PhotoUploadProps {
    onChange(props: PhotoUploadState) : void;
}

const PhotoUpload : React.FC<PhotoUploadProps> = (
    {
    onChange
}
) => {
    const fileRef: RefObject<null | HTMLInputElement> = React.useRef(null);
    const [files, setFiles] = useState<Map<string, File>>(new Map());
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            var newFiles: Map<string, File> = new Map(Array.from(event.target.files).map(file => [file.name, file]))
            files.entries().forEach(
                ([key, value]) => {
                    if (!newFiles.has(key)) {
                        newFiles.set(key, value)
                    }
                }
            )
            setFiles(
                newFiles
            )
            event.target.files = null
        }
    }
    const removeFileByName = (key: string) => {
        const newFiles = new Map(files.entries().filter(([k, v]) => k != key));
        setFiles(newFiles);
    };
    const selectPhotosClick = () => {
        if (fileRef.current != null) {
            fileRef.current.click();
        }
    }
    return (
        <Paper>
            <Card elevation={10}>
                <div>Upload Photos</div>
                <input
                    type="file"
                    ref={fileRef}
                    hidden
                    multiple
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) => {handleFileChange(e)}}
                />
                <Button onClick={selectPhotosClick}>
                     Add Photos
                </Button>
                <ImageList>
                    {files.values().map((file) => (
                        <ImageListItem
                            sx={{
                                maxWidth: "200px",
                                maxHeight: "200px",
                            }}
                        >
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                key={file.name}
                            />
                            <ImageListItemBar
                                position={"top"}
                                actionIcon={
                                    <IconButton
                                        onClick={() => removeFileByName(file.name)}
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                }

                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Button
                    disabled={files.entries.length != 0}
                    onClick={
                        () => onChange({files: Array.from(files.values())})
                    }
                >
                    Upload Photos
                    <FileUploadIcon/>
                </Button>
            </Card>
        </Paper>
    )
}

export default PhotoUpload;