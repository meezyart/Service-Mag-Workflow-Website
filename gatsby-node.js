const path = require(`path`)



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