import MultiscaleChunkedImage from './MultiscaleChunkedImage'
import InMemoryMultiscaleChunkedImage from './InMemoryMultiscaleChunkedImage'
import ndarrayToItkImage from './ndarrayToItkImage'

async function itkImageToInMemoryMultiscaleChunkedImage(image, isLabelImage) {
  let chunkSize = [64, 64, 64]
  if (image.data.length > 2e6) {
    // Keep a single chunk
    chunkSize = image.size
  } else if (image.imageType.dimension === 2) {
    chunkSize = [256, 256]
  }

  const {
    metadata,
    imageType,
    pyramid,
  } = await InMemoryMultiscaleChunkedImage.buildPyramid(
    image,
    chunkSize,
    isLabelImage
  )
  const multiscaleImage = new InMemoryMultiscaleChunkedImage(
    pyramid,
    metadata,
    imageType,
    image.name
  )

  return multiscaleImage
}

async function toMultiscaleChunkedImage(image, isLabelImage = false) {
  let multiscaleImage = null
  if (image instanceof MultiscaleChunkedImage) {
    // Already a multi-scale, chunked image
    multiscaleImage = image
  } else if (image.imageType !== undefined) {
    // itk.js Image
    multiscaleImage = await itkImageToInMemoryMultiscaleChunkedImage(
      image,
      isLabelImage
    )
  } else if (image.shape !== undefined && image.stride !== undefined) {
    // ndarray
    const itkImage = ndarrayToItkImage(image)
    multiscaleImage = await itkImageToInMemoryMultiscaleChunkedImage(
      itkImage,
      isLabelImage
    )
  } else {
    throw new Error('Unexpected image')
  }

  return multiscaleImage
}

export default toMultiscaleChunkedImage
