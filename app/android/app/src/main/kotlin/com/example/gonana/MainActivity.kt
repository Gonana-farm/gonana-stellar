package com.example.gonana

import io.flutter.embedding.android.FlutterFragmentActivity

class MainActivity: FlutterFragmentActivity() {
//        private val CHANNEL = "https://www.gonana.farm/channel"
//        private var startString: String? = null
//        override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
//            GeneratedPluginRegistrant.registerWith(flutterEngine)
//
//            MethodChannel(flutterEngine.dartExecutor, CHANNEL).setMethodCallHandler { call, result ->
//                if (call.method == "initialLink") {
//                    if (startString != null) {
//                        result.success(startString)
//                    }
//                }
//            }
//        }
//
//        override fun onCreate(savedInstanceState: Bundle?) {
//            super.onCreate(savedInstanceState)
//
//            val intent = getIntent()
//            startString = intent.data?.toString()
//        }
//
//
//        private val EVENTS = "https://www.gonana.farm/events"
//        private var linksReceiver: BroadcastReceiver? = null
//
//        override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
//            GeneratedPluginRegistrant.registerWith(flutterEngine)
//
//            EventChannel(flutterEngine.dartExecutor, EVENTS).setStreamHandler(
//                    object : EventChannel.StreamHandler {
//                        override fun onListen(args: Any?, events: EventSink) {
//                            linksReceiver = createChangeReceiver(events)
//                        }
//
//                        override fun onCancel(args: Any?) {
//                            linksReceiver = null
//                        }
//                    }
//            )
//        }
//        override fun onNewIntent(intent: Intent) {
//            super.onNewIntent(intent)
//            if (intent.action === Intent.ACTION_VIEW) {
//                linksReceiver?.onReceive(this.applicationContext, intent)
//            }
//        }
//
//
//        fun createChangeReceiver(events: EventSink): BroadcastReceiver? {
//            return object : BroadcastReceiver() {
//                override fun onReceive(context: Context, intent: Intent) { // NOTE: assuming intent.getAction() is Intent.ACTION_VIEW
//                    val dataString = intent.dataString ?:
//                    events.error("UNAVAILABLE", "Link unavailable", null)
//                    events.success(dataString)
//                }
//            }
//        }

}