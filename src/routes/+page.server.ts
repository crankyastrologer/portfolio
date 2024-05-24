import { GraphQLClient } from 'graphql-request';
/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const hyghgraph = new GraphQLClient(
		import.meta.env.VITE_GRAPHQL_URL,

		{
			headers: {}
		}
	);
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
