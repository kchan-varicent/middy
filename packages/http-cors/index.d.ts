import middy from '@middy/core'

interface ICorsOptions {
  origin?: string;
  origins?: string[];
  getOrigin?: Function;
  headers?: string;
  credentials?: boolean;
  maxAge?: string;
  cacheControl?: string;
}

declare const cors : middy.Middleware<ICorsOptions, any, any>

export default cors
