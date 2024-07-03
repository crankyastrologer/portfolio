
import {hyghgraph} from '../../lib/hygraph';

/** @type {import('./$types').PageLoad} */
export const load = async () =>
{

    const response=  await hyghgraph.request(`query MyQuery {
        projects {
          id
          techused
          title
          description
        }
      }
      
      `)
      const data = await response
      
      return {data};
}