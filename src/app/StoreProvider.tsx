'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '@/lib/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | undefined>(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return <Provider store={storeRef.current as AppStore}>{children}</Provider>
}