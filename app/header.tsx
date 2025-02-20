'use client'
import { TextEffect } from '@/components/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-2xl font-medium text-black dark:text-white">
          Zakir Maharramov
        </p>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="font-medium text-black dark:text-zinc-500"
          delay={0.5}
        >
          Front-end Developer
        </TextEffect>
      </div>
    </header>
  )
}
