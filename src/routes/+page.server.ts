import {hyghgraph} from '../lib/hygraph';

/** @type {import('./$types').PageLoad} */
export const load = async () => {

	const response: any = await hyghgraph.request(`query MyQuery {
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
