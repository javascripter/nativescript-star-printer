declare var StarPrinterVersionNumber: number;

declare var StarPrinterVersionString: interop.Reference<number>;

declare class TNSStarPrinter extends NSObject {

  static alloc(): TNSStarPrinter; // inherited from NSObject

  static connectOnComplete(portName: string, completionHandler: (p1: NSDictionary<NSString, any>) => void): void;

  static disconnectOnComplete(portName: string, completionHandler: (p1: boolean) => void): void;

  static toggleAutoConnectEnableOnComplete(portName: string, newSetting: boolean, completionHandler: (error: NSString) => void);

  static new(): TNSStarPrinter; // inherited from NSObject

  static searchPrinters(completionHandler: (p1: NSArray<any>) => void): void;

  static getBitmapCommandWithDiffusionAndCenterAlignment(image: UIImage, diffusion: boolean, centerAlignment: boolean): NSData;

  static sendCommandsToPortOnComplete(commands: NSData, portName: string, completionHandler: (p1: string) => void): void;
}
