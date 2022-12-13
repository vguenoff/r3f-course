import { Mesh, MeshBasicMaterial } from 'three'
import { useFrame, MeshProps } from '@react-three/fiber'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'

type BoxProps = MeshProps & { wireframe?: boolean }

export default function Box({ position, name, wireframe }: BoxProps) {
  const [hover, setHover] = useState<boolean>(false)
  const [rotate, setRotate] = useState<boolean>(false)
  const ref = useRef<Mesh>()
  const meshBasicMaterialRef = useRef<MeshBasicMaterial>()

  // useEffect(() => {
  //   console.log({ ref, meshBasicMaterialRef })
  // }, [])

  // this could be useEffect - no difference here
  useLayoutEffect(() => {
    const { name, position } = ref.current

    if (name === 'A') position.z = 1
  }, [])

  useFrame((state, delta) => {
    const { name, rotation, position } = ref.current
    const { sin } = Math

    if (name === 'A') {
      if (rotate) rotation.x += 1 * delta
      position.y = sin(state.clock.getElapsedTime() / 2)
    }

    if (name === 'B' && rotate) rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...{ ref, position, name }}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry />
      <meshBasicMaterial color={hover ? 0xff0000 : 0x00ff00} {...{ wireframe }} ref={meshBasicMaterialRef} />
    </mesh>
  )
}
