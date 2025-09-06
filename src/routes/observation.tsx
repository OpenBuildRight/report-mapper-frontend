import { createFileRoute } from '@tanstack/react-router'
import ObservationForm from '../components/ObservationForm'

export const Route = createFileRoute('/observation')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<ObservationForm/>)
}
