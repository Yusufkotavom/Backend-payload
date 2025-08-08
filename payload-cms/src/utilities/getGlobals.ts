import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })

export const getGlobals = async () => {
  const [header, footer, siteIdentity, businessInfo, navigation, websiteDesign, seoDefaults] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/header`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/footer`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/siteIdentity`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/businessInfo`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/navigation`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/websiteDesign`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/globals/seoDefaults`).then((r) => r.json()),
  ])
  return { header, footer, siteIdentity, businessInfo, navigation, websiteDesign, seoDefaults }
}
