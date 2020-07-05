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
      initialValue: {
        publishAt: new Date().toISOString()
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => { return Rule.required().min(5) }
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => { return Rule.required() }
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
              options: {
                isHighlighted: true
              }
            }
          ],
          options: {
            hotspot: true
          }
    },
        {
          name: 'content',
          title: 'Post Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  title: 'Image Position',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      {
                        title: 'Center',
                        value: 'center'
                      },
                      {
                        title: 'Left',
                        value: 'left'
                      },
                      {
                        title: 'Right',
                        value: 'right'
                      }
                    ],
                    layout: 'radio',
                    isHighlighted: true
                  }
                },
                    {
                  name: 'alt',
                  type: 'text',
                  title: 'Description',
                  options: {
                    isHighlighted: true
                  }
                }
              ],
              options: {
                hotspot: true
              }
            },
            {
              type: 'code',
              options: {
                withFilename: true
              }
            }
          ]
          
        },
        {
          name: 'publishAt',
          title: 'Publish At',
          type: 'datetime',
          validation: (Rule) => { return Rule.required() }
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
          validation: (Rule) => { return Rule.required() }
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          validation: (Rule) => { return Rule.required() }
        }
      ]
    }
  ])
})
