import 'dart:convert';
import 'dart:developer';

import 'package:get/get.dart';

import '../../data/models/order_model.dart';
import '../../presentation/widgets/widgets.dart';
import '../../utilities/api_routes.dart';
import '../../utilities/network.dart';

class CryptoPayController extends GetxController {
  RxString tokenName = "ETH".obs;
  RxList<String> tokenNamesList = <String>[].obs;
  RxString tokenLogo = "eth".obs;
  RxString tokenValue = "0".obs;

  void updateTokens(String newTokenName, String newTokenLogo) {
    tokenName.value = newTokenName;
    tokenLogo.value = newTokenLogo;
    update();
  }

  Future<bool> cryptoPlaceOrder(
      List<Order> order, String serviceCode, var context) async {
    try {
      var data = {"orders": order, "service_code": serviceCode};
      log("data: $data");
      for (var item in order) {
        print('Order ID: ${item.id}');
        print('Units: ${item.units}');
      }
      var res =
          await NetworkApi().authPostData(data, ApiRoute.cryptoPlaceOrder);
      var response = jsonDecode(res.body);
      print("got here");
      log('Message: $response');
      log('status code: ${res.statusCode}');
      if (res.statusCode == 201) {
        SuccessSnackbar.show(context, "Successful");
        return true;
      } else {
        ErrorSnackbar.show(context, response["message"]);
        return false;
      }
    } catch (e, s) {
      log("checkOut Error=> $e");
      log("checkOut Stack=> $s");
      return false;
    }
  }
}
