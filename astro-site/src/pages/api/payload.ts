import type { APIRoute } from 'astro'
import { PAYLOAD_URL } from '../../lib/payload'

export const GET: APIRoute = async ({ request }) => {
  const res = await fetch(`${PAYLOAD_URL}/api/globals/header`)
  const json = await res.json()
  return new Response(JSON.stringify(json, null, 2), { headers: { 'Content-Type': 'application/json' } })
}