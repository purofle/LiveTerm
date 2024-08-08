import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
      <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
        {children}
      </main>
    </div>
  )
}
