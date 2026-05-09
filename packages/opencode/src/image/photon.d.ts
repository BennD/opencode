declare module "@silvia-odwyer/photon-node" {
  class PhotonImage {
    constructor(buffer: Uint8Array, width: number, height: number)
    static new_from_byteslice(buffer: Buffer): PhotonImage
    get_width(): number
    get_height(): number
    get_bytes(): Uint8Array
    get_bytes_jpeg(quality: number): Uint8Array
    free(): void
  }

  const SamplingFilter: {
    Lanczos3: number
  }

  function resize(image: PhotonImage, width: number, height: number, filter: number): PhotonImage

  export { PhotonImage, SamplingFilter, resize }
}
