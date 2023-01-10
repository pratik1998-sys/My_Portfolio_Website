import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import testimonials from './schemas/testimonials'
import works from './schemas/works'
import brands from './schemas/brands'
import abouts from './schemas/abouts'
import skills from './schemas/skills'
import workExperience from './schemas/workExperience'
import experiences from './schemas/experiences'
import contact from './schemas/contact'

export default defineConfig({
  name: 'default',
  title: 'My_Portfolio_Website',

  projectId: '4vamahyg',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([
      works,
      testimonials,
      brands,
      abouts,
      skills,
      workExperience,
      experiences,
      contact,
    ]),
  },
})
