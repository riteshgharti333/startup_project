declare module "cloudinary" {
  export const v2: {
    config: (config: {
      cloud_name?: string;
      api_key?: string;
      api_secret?: string;
    }) => void;
    uploader: {
      upload_stream: (
        options: {
          folder?: string;
          resource_type?: string;
          allowed_formats?: string[];
          timeout?: number;
        },
        callback: (error: any, result: any) => void
      ) => { end: (buffer: Buffer) => void };
      destroy: (publicId: string) => Promise<any>;
    };
  };
}