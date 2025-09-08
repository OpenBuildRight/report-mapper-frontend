import {Card, Paper, TextField} from "@mui/material"
import React, {useState} from "react";

const PhotoUpload : React.FC = (

) => {
    const fileRef = React.useRef(null);
    const [files, setFiles] = useState<File[]>([]);
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFiles(Array.from(event.target.files));
        }
    }
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
                <div>
                    {files.map((file, index) => (
                        <img
                            key={index}
                            alt={file.name}
                            src={URL.createObjectURL(file)}
                            style={{
                                maxWidth: "100px",
                            }}
                        />
                    ))}
                </div>
            </Card>
        </Paper>
    )
}

export default PhotoUpload;