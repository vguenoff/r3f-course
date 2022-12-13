import {
  useRef,
  useState,
  // useEffect,
  // useMemo
} from 'react'
import { useFrame, MeshProps } from '@react-three/fiber'
import type { Mesh, BoxGeometry, SphereGeometry, DodecahedronGeometry } from 'three'

type BoxProps = MeshProps & { polyhedron: (BoxGeometry | SphereGeometry | DodecahedronGeometry)[]; wireframe?: boolean }

export default function Box({ polyhedron, position, name, wireframe }: BoxProps) {
  const ref = useRef<Mesh>()
  const [count, setCount] = useState(0)
  const [hover, setHover] = useState<boolean>(false)

  // const geometry = useMemo(
  //   () => [new BoxGeometry(), new SphereGeometry(0.785398), new DodecahedronGeometry(0.785398)],
  //   [],
  // )

  // useEffect(() => {
  //   console.log(ref.current.geometry.uuid)
  // })

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...{ ref, position, name }}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={polyhedron[count]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry />
      <meshBasicMaterial color={hover ? 0xff0000 : 0x00ff00} {...{ wireframe }} />
    </mesh>
  )
}
