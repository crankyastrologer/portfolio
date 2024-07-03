import {hyghgraph} from '../lib/utils/hygraph';
import type {respBlog} from '../lib/interface/interface';
/** @type {import('./$types').PageLoad} */
export const load = async () => {

	const response: respBlog = await hyghgraph.request(`query MyQuery {
		blogs {
		  id
		  blog {
			markdown
		  }
		}
	  }
	  
      `);
	const data: any = response.blogs;

	return { data };
};
