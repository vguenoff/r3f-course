import Box2 from '@/components/canvas/Box2'
import { BoxGeometry, SphereGeometry, DodecahedronGeometry } from 'three'

const polyhedron = [new BoxGeometry(), new SphereGeometry(0.785398), new DodecahedronGeometry(0.785398)]

export default function Page() {
  return (
    <main>
      <h2>This is the Box 2 example</h2>
      <p>click to change the shape</p>
    </main>
  )
}

Page.canvas = () => (
  <>
    <Box2 {...{ polyhedron }} position={[-0.75, 0, 0]} name='A' wireframe />
    <Box2 {...{ polyhedron }} position={[0.75, 0, 0]} name='B' wireframe />
  </>
)
