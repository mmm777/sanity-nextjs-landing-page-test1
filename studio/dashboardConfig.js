export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d132aab1319754cf50409b1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-test1-studio',
                  apiId: '56fbd7d7-2744-45da-b8d6-9609ab5e5031'
                },
                {
                  buildHookId: '5d132aabc40cdbc1f89b8565',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-test1',
                  apiId: 'c3457cd4-8548-43f4-bd2f-77f3e2c48b5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmm777/sanity-nextjs-landing-page-test1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-test1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
