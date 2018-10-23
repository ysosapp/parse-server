/*eslint no-unused-vars: "off"*/
/**
 * @module Adapters
 */
/**
 * @interface ImageFetcherAdapter
 */
export class ImageFetcherAdapter {
  /** Responsible for making operation in a image file
   *
   * @param {*} queryString - The received query string
   * @param {string} filename - The name of the file
   * @param {*} data - the buffer of data from the file
   * @discussion the contentType can be undefined if the controller was not able to determine it
   *
   * @return {Promise} a promise that should fail if the storage didn't succeed
   */
  adapt(queryString, filename: string, contentType: string, data): Promise {}
}

export default ImageFetcherAdapter;
