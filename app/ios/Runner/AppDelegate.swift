import UIKit
import Flutter

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}
//
// @UIApplicationMain
// @objc class AppDelegate: FlutterAppDelegate {
//
//   private var methodChannel: FlutterMethodChannel?
//
//   override func application(
//     _ application: UIApplication,
//     didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?
//   ) -> Bool {
//
//     let controller = window.rootViewController as! FlutterViewController
//     methodChannel = FlutterMethodChannel(name: "https://www.gonana.farm/channel", binaryMessenger: controller)
//
//     methodChannel?.setMethodCallHandler({ (call: FlutterMethodCall, result: FlutterResult) in
//       guard call.method == "initialLink" else {
//         result(FlutterMethodNotImplemented)
//         return
//       }
//     })
//
// }
//     GeneratedPluginRegistrant.register(with: self)
//     return super.application(application, didFinishLaunchingWithOptions: launchOptions)
//   }
//
//   @UIApplicationMain
//   @objc class AppDelegate: FlutterAppDelegate {
//     private var eventChannel: FlutterEventChannel?
//
//     private let linkStreamHandler = LinkStreamHandler()
//
//     override func application(
//       _ application: UIApplication,
//       didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?
//     ) -> Bool {
//
//       let controller = window.rootViewController as! FlutterViewController
//       eventChannel = FlutterEventChannel(name: "https://www.gonana.farm/events", binaryMessenger: controller)
//
//       GeneratedPluginRegistrant.register(with: self)
//       eventChannel?.setStreamHandler(linkStreamHandler)
//       return super.application(application, didFinishLaunchingWithOptions: launchOptions)
//     }
//
//     override func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
//       eventChannel?.setStreamHandler(linkStreamHandler)
//       return linkStreamHandler.handleLink(url.absoluteString)
//     }
//   }
//
//
//   class LinkStreamHandler:NSObject, FlutterStreamHandler {
//
//     var eventSink: FlutterEventSink?
//
//     // links will be added to this queue until the sink is ready to process them
//     var queuedLinks = [String]()
//
//     func onListen(withArguments arguments: Any?, eventSink events: @escaping FlutterEventSink) -> FlutterError? {
//       self.eventSink = events
//       queuedLinks.forEach({ events($0) })
//       queuedLinks.removeAll()
//       return nil
//     }
//
//     func onCancel(withArguments arguments: Any?) -> FlutterError? {
//       self.eventSink = nil
//       return nil
//     }
//
//     func handleLink(_ link: String) -> Bool {
//       guard let eventSink = eventSink else {
//         queuedLinks.append(link)
//         return false
//       }
//       eventSink(link)
//       return true
//     }
//   }
