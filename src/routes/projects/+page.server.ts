
import {hyghgraph} from '../../lib/hygraph';
import type {Projects} from '../../lib/interface';
/** @type {import('./$types').PageLoad} */
export const load = async () =>
{

    const response: Projects=  await hyghgraph.request(`query MyQuery {
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