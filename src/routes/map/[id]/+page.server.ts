import type { PageServerLoad } from './$types'

import { map } from '$db/controller'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
  const mapID = Number(params.id)

  const map_info = map.queryMapWithPoints(mapID)

  if (!map_info) {
    return error(404, 'Map not found')
  }
  return { map: map_info }
}) satisfies PageServerLoad
