export default function Page() {
  return <main>This is the first r3f page</main>
}

Page.canvas = () => (
  <mesh>
    <boxGeometry />
    <meshBasicMaterial color={0x00ff00} wireframe />
  </mesh>
)
