const path = require(`path`)


// const data = {
//   editions: [
//     {
//       title: "Home",
//       slug: "home",
//     },
//     {
//       title: "Syracuse",
//       slug: "Alonso",
//     },
//     {
//       title: "Colorado Springs",
//       slug: "Raleigh",
//     },
//     {
//       title: "Scottsdale",
//       slug: "Dallas",
//     },
//     {
//       title: "Albuquerque",
//       slug: "Vit",
//     },

//     {
//       title: "San Jose",
//       slug: "Hayden",
//     },
//     {
//       title: "Carlsbad",
//       slug: "Gamel",
//     },
//   ],
// }

// const POST_NODE_TYPE = `editions`

// exports.sourceNodes = async ({
//   actions,
//   createContentDigest,
//   createNodeId,
//   getNodesByType,
// }) => {
//   const { createNode } = actions

//   // loop through data and create Gatsby nodes
//   data.editions.forEach((edition) =>
//     createNode({
//       ...edition,
//       id: createNodeId(`${POST_NODE_TYPE}-${edition.title}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: POST_NODE_TYPE,
//         content: JSON.stringify(edition),
//         contentDigest: createContentDigest(edition),
//       },
//     })
//   )
//   return
// }



// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   data.editions.forEach((edition) =>
//     createPage({
//       path: edition.slug ,
//       component: require.resolve("./src/templates/articlePage.js"),
//       context: { edition },
//       defer: true,
//     })
          // _rawArticlePages(resolveReferences: { maxDepth: 10 })

//   )
// }

async function createCoverPages(
  pathPrefix = "/",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityEditions(sort: { fields: _createdAt }) {
        nodes {
          _id
          slug:_rawSlug(resolveReferences: { maxDepth: 10 })
          _rawTocList(resolveReferences: { maxDepth: 10 })
          _rawArticlePages(resolveReferences: { maxDepth: 10 })
          _rawIntroText(resolveReferences: { maxDepth: 10 })
          title
          subtitle
          tocTitle
          _type
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const editionsNodes = (result.data.allSanityEditions || {}).nodes || []
  editionsNodes.forEach((edge) => {
    const { _id, slug = {},_type, title} = edge
    const editionPath = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${editionPath}`)
    createPage({
      path: editionPath,
      component: require.resolve("./src/templates/ArticlePage.js"),
      context: { _id, _type, slug , title},
    })

    edge._rawArticlePages && edge._rawArticlePages.forEach((article) => {
      const { id, slug = {}, pageTemplate, pageSections, _type } = article
      const articlePath = [`${editionPath}`, slug.current, "/"].join("")
      reporter.info(`Creating landing page: ${articlePath}`)
      createPage({
        path: articlePath,
        component: require.resolve("./src/templates/ArticlePage.js"),
        context: { _id,title,pageTemplate, pageSections, _type, ...article },
      })
    })

  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  await createCoverPages("/", graphql, actions, reporter)
}


// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     {
//       allEditions {
//         nodes {
//           slug {
            //   current
            // }
//           title
//           id
//         }
//       }
//     }
//   `)
//   const templatePath = path.resolve("./src/templates/articlePage.js")

//   result.data.allEditions.forEach((node) => {
//     createPage({
//       path: node.slug,
//       component: templatePath,
//       context: {
//         slug: node.slug,
//         title: node.title,
//       },
//     })
//   })
// }