import 'package:bloc/bloc.dart';
import 'package:flutter/services.dart';
import 'dart:async';

class DeepLinkBloc extends Bloc {
  //Event Channel creation
  static const eventStream =
      const EventChannel('https://www.gonana.farm/events');

  //Method channel creation
  static const platform =
      const MethodChannel('https://www.gonana.farm/channel');

  StreamController<String> _stateController = StreamController();

  Stream<String> get state => _stateController.stream;

  Sink<String> get stateSink => _stateController.sink;

  //Adding the listener into contructor
  DeepLinkBloc(super.initialState) {
    //Checking application start by deep link
    startUri().then(_onRedirected);
    //Checking broadcast stream, if deep link was clicked in opened appication
    // stream.receiveBroadcastStream().listen((d) => _onRedirected(d));
    stream.listen((d) => _onRedirected(d));
  }

  _onRedirected(String uri) {
    // Here can be any uri analysis, checking tokens etc, if it’s necessary
    // Throw deep link URI into the BloC's stream
    stateSink.add(uri);
  }

  @override
  void dispose() {
    _stateController.close();
  }

  Future<String> startUri() async {
    try {
      final dynamic result = await platform.invokeMethod('initialLink');
      return result.toString(); // Convert the result to a String
    } on PlatformException catch (e) {
      return "Failed to Invoke: '${e.message}'.";
    }
  }
}
