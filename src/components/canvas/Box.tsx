import { Mesh, MeshBasicMaterial } from 'three'
import { useFrame, MeshProps } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef } from 'react'

type BoxProps = MeshProps & { wireframe?: boolean }

export default function Box({ position, name, wireframe }: BoxProps) {
  const ref = useRef<Mesh>()
  const meshBasicMaterialRef = useRef<MeshBasicMaterial>()

  useEffect(() => {
    console.log({ ref, meshBasicMaterialRef })
  }, [])

  // this could be useEffect - no difference here
  useLayoutEffect(() => {
    const { name, position } = ref.current

    if (name === 'A') position.z = 1
  }, [])

  useFrame((state, delta) => {
    const { name, rotation, position } = ref.current
    const { sin } = Math

    if (name === 'A') {
      rotation.x += 1 * delta
      position.y = sin(state.clock.getElapsedTime() / 2)
    }

    if (name === 'B') rotation.y += 0.5 * delta
  })

  return (
    <mesh {...{ ref }} {...{ position, name }}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} {...{ wireframe }} ref={meshBasicMaterialRef} />
    </mesh>
  )
}
