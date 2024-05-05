import {GraphQLClient} from 'graphql-request'
/** @type {import('./$types').PageLoad} */
export const load = async () =>
{
    const hyghgraph = new GraphQLClient(
        import.meta.env.VITE_GRAPHQL_URL,

        {
			headers: {}
		}
    )
    const response=  await hyghgraph.request(`query MyQuery {
        projects {
          id
          techused
          title
          description
        }
      }
      
      `)
      const data = response
      
      return {data};
}