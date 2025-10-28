import {Args, Command} from '@oclif/core'
import fs from 'node:fs'

export default class Component extends Command {
  static override args = {
    name: Args.string({description: 'component name'}),
  }
  static override description = 'Cli to generate files for new component'
  static override examples = ['NewComponent.tsx']
  static override flags = {}

  public async run(): Promise<void> {
    const {args} = await this.parse(Component)
    const isComponentPathExist = fs.existsSync('./src/components')
    const fileNames = ['index.tsx', 'styled.ts', 'types.ts', '.test.tsx', '.stories.tsx']
    if (isComponentPathExist) {
      if (args.name) {
        const folderName = args.name[0].toUpperCase() + args.name.slice(1)
        fs.mkdir(`./src/components/${folderName}`, {recursive: true}, (err) => {
          if (err) {
            console.log('Error creating folder')
          } else {
            for (const [index, file] of fileNames) {
              if (index === '3') {
                fs.createWriteStream(`./src/components/${folderName}/${args.name + file}`)
              }

              if (index === '4') {
                fs.createWriteStream(`./src/components/${folderName}/${folderName + file}`)
              }

              fs.createWriteStream(`./src/components/${folderName}/${file}`)
            }
          }
        })
      } else {
        console.log('Name not found. You might forget to include the component name')
      }
    } else {
      console.log('Path not found. You might not be in the root directory')
    }
  }
}
