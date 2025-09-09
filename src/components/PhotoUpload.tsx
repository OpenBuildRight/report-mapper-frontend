import {Card, ImageList, ImageListItem, ImageListItemBar, Paper} from "@mui/material"
import React, {RefObject, useState} from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';


export interface PhotoUploadProps {
    files: Map<string, File>;
    setFiles: (files: Map<string, File>) => void;
    onUploadClick: () => void;
}

const PhotoUpload : React.FC<PhotoUploadProps> = (
    {
        files,
        setFiles,
        onUploadClick,
    }
) => {
    const fileRef: RefObject<null | HTMLInputElement> = React.useRef(null);
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
                    {Array.from(files.values()).map((file) => (
                        <ImageListItem
                            key={file.name}
                            sx={{
                                maxWidth: "200px",
                                maxHeight: "200px",
                            }}
                        >
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                            />
                            <ImageListItemBar
                                position={"top"}
                                title={file.name}
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
                    disabled={Array.from(files.entries()).length === 0}
                    onClick={
                        onUploadClick
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