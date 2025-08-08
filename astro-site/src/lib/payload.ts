export const PAYLOAD_URL = import.meta.env.PAYLOAD_URL || 'http://localhost:3000'

export async function fetchPayload<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${PAYLOAD_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
  const res = await fetch(url, { ...(init || {}), headers: { ...(init?.headers || {}), 'Content-Type': 'application/json' } })
  if (!res.ok) throw new Error(`Payload fetch failed: ${res.status} ${res.statusText}`)
  return res.json()
}