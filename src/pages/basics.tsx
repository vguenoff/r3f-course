import Box1 from '@/components/canvas/Box1'

export default function Page() {
  return (
    <main>
      <h2>This is the Box 1 example</h2>
      <p>click to initiate rotation</p>
    </main>
  )
}

Page.canvas = () => (
  <>
    <Box1 position={[-0.75, 0, 0]} name='A' wireframe />
    <Box1 position={[0.75, 0, 0]} name='B' wireframe />
  </>
)
