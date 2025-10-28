import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('component', () => {
  it('runs component cmd', async () => {
    const {stdout} = await runCommand('component')
    expect(stdout).to.contain('hello world')
  })

  it('runs component --name oclif', async () => {
    const {stdout} = await runCommand('component --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
