import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return <Instructions>This is the first r3f page</Instructions>
}

Page.canvas = (props) => <Blob route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
