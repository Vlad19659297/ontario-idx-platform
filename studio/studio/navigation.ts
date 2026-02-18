export default {
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'link', title: 'Link', type: 'string'}
          ]
        }
      ]
    }
  ]
}
