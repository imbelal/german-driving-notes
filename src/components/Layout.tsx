import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MobileHeader, Sidebar } from './Sidebar'

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.key])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <MobileHeader onOpen={() => setOpen(true)} />
      <main className="lg:pl-[292px]">
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <Outlet />
        </div>
        <footer className="mx-auto max-w-5xl px-5 pb-10 sm:px-8 lg:px-12">
          <div className="border-t border-line pt-5 text-[11px] leading-relaxed text-ink-soft">
            <p>
              German Driving Notes is a study aid for learner drivers. It is not legal advice.
              Rules, fines and local practices can change — always follow the current StVO, your
              driving instructor and official exam guidance.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
