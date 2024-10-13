import {defineConfig} from 'sanity'
import {ListItem, structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'scapesurveys',

  projectId: 'oct6r06l',
  dataset: 'production',

  basePath: '/admin',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({type: 'project', S, context}),
            orderableDocumentListDeskItem({type: 'service', S, context}),
            orderableDocumentListDeskItem({type: 'teamMember', S, context}),
            orderableDocumentListDeskItem({type: 'client', S, context}),
            ...S.documentTypeListItems().filter(
              listItem => {
                const id = listItem.getId();
                return id ? !['project', 'service', 'teamMember', 'client'].includes(id) : false;
              }
            ),
          ])
      }
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})