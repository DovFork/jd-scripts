import { Service, Inject } from 'typedi';
import { IContent } from '../interfaces/IContent';

@Service()
export default class YiYanService {
  constructor(
    @Inject('yiYan') private yiYan: Models.ICommonModel,
    @Inject('logger') private logger
  ) {
  }

  public async getYiYan(): Promise<{ yiYan: IContent }> {
    let [yiYanRecord] = await this.yiYan.aggregate([{ $sample: { size: 1 } }]);
    if (!yiYanRecord) {
      yiYanRecord = {};
    }
    return { yiYan: yiYanRecord };
  }

}
