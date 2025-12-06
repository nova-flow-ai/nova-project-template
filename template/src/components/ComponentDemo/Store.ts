import {BaseStore} from 'src/store'
export class AStore extends BaseStore {
  setup() {}
  loveWallList: Record<string, any>[] = []
  async setLoveWall() {

  }
}

export default new AStore()
