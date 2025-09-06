import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/observation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello Observation"!</div>
}
