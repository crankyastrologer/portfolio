
import {hyghgraph} from '../../lib/utils/hygraph';
import type {Projects} from '../../lib/interface/interface';
/** @type {import('./$types').PageLoad} */
export const load = async () =>
{

    const response: Projects=  await hyghgraph.request(`
      query MyQuery {
  projects {
    id
    imgLink
    link
    techused
    title
    description
  }
}
      
      `)
      const data = await response
      
      return {data};
}