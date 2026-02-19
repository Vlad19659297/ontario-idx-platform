import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem().schemaType('siteSettings').title('Settings'),
      S.documentListItem().schemaType('navigation').title('Menu'),
    ])
