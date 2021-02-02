import { IAWSDataResponse } from '@modules/app-data/infra/schemas/app-data'

export default class ListAwsDataService {
  public async execute (): Promise<IAWSDataResponse> {
    return {
      AWSSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      AWSAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
      AWSBucketRegion: process.env.AWS_BUCKET_REGION
    }
  }
}
