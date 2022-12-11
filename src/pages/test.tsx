import Box from '@/components/canvas/Box'

export default function Page() {
  return <main>This is the first r3f page</main>
}

Page.canvas = () => (
  <>
    <Box position={[-0.75, 0, 0]} name='A' wireframe />
    <Box position={[0.75, 0, 0]} name='B' wireframe />
  </>
)
