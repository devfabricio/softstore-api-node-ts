import url from 'url'
import https from 'https'
import sizeOf from 'image-size'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'

export const getImageSize = async (imageUrl: string): Promise<ISizeCalculationResult> => {
  const options = new url.URL(imageUrl)

  return new Promise((resolve, reject) => {
    https.get(options, function (response) {
      var chunks = []
      response.on('data', function (chunk) {
        chunks.push(chunk)
      }).on('end', function () {
        const buffer = Buffer.concat(chunks)
        resolve(sizeOf(buffer))
      })
    }).on('error', reject)
  })
}
