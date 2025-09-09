import { createFileRoute } from '@tanstack/react-router'
import ObservationForm from '../components/ObservationForm'
import React from "react";

export const Route = createFileRoute('/observation')({
  component: RouteComponent,
})

function RouteComponent() {
    const [files, setFiles] = React.useState<Map<string, File>>(new Map())
    function onUploadClick() {}
  return (<ObservationForm
        photoUploadProps={{
            files: files,
            setFiles: setFiles,
            onUploadClick: onUploadClick,
        }}
  />)
}
