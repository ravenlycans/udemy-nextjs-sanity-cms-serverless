// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      title: 'Author',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image'
        },
        {
          name: 'shortBio',
          title: 'Short Bio',
          type: 'string'
        }
      ]
    },
    {
      name: 'blog',
      title: 'BlogPost',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image'
        },
        {
          name: 'publishAt',
          title: 'Publish At',
          type: 'datetime'
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}]
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug'
        }
      ]
    }
  ])
})
