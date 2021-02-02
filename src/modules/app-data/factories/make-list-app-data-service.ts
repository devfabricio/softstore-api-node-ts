import ListAwsDataService from '@modules/app-data/services/list-aws-data-service'

export const makeListAppDataService = (): ListAwsDataService => {
  return new ListAwsDataService()
}
