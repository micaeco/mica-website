import { Droplet, Cpu, Radio } from 'lucide-react'

import HowItWorks from '@/src/components/product/howItWorks'
import CallToAction from '@/src/components/product/callToAction'

export default function Product() {
  return (
    <main className="flex flex-col justify-center bg-gray-50">
      <HowItWorks />
      <CallToAction />
    </main>
  )
}