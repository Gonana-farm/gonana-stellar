import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:gonana/features/presentation/page/wallet/wallet_page.dart';
import 'package:gonana/features/presentation/page/wallet/wallet_withdrawal.dart';
import 'package:gonana/features/presentation/widgets/numpad.dart';
import '../../../controllers/auth/passcode_controller.dart';
import '/features/presentation/widgets/widgets.dart';
import 'package:pin_code_fields/pin_code_fields.dart';

class WithdrawalBankPasscode extends StatelessWidget {
  WithdrawalBankPasscode({Key? key}) : super(key: key);
  PasscodeController passcodeController = Get.put(PasscodeController());
  TextEditingController _passCodeController = TextEditingController();
  String get passCode => _passCodeController.text;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color(0xffF1F1F1),
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          leading: IconButton(
              onPressed: () {
                Get.back();
              },
              icon: const Icon(
                Icons.arrow_back,
                size: 20,
                color: Color(0xff292D32),
              )),
        ),
        body: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: ListView(
                  children: [
                    Padding(
                        padding: const EdgeInsets.all(8),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Padding(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 0.0),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                // crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text('Four Digit Passcode',
                                      textAlign: TextAlign.start,
                                      style: TextStyle(
                                          fontSize: 24,
                                          fontWeight: FontWeight.w600)),
                                  const Text(
                                      'Enter you four digit password to confirm this\n transaction',
                                      style: TextStyle(
                                          fontSize: 14,
                                          fontWeight: FontWeight.w400)),
                                  Padding(
                                    padding: const EdgeInsets.symmetric(
                                        horizontal: 50.0, vertical: 50.0),
                                    child: PinCodeTextField(
                                      controller: _passCodeController,
                                      obscureText: true,
                                      pinTheme: PinTheme(
                                        shape: PinCodeFieldShape.box,
                                        borderRadius: BorderRadius.circular(5),
                                        borderWidth: 1,
                                        fieldHeight: 60.0,
                                        fieldWidth: 52.0,
                                        activeColor: const Color(0xff444444),
                                        disabledColor: const Color(0xff444444),
                                        inactiveColor: const Color(0xff444444),
                                      ),
                                      appContext: context,
                                      length: 4,
                                      onChanged: (String value) {
                                        print(value);
                                      },
                                    ),
                                  ),
                                  SizedBox(
                                      // height: 400,
                                      // width: 310,
                                      child: NumPad(
                                    controller: _passCodeController,
                                    delete: () {},
                                  )),
                                ],
                              ),
                            ),
                          ],
                        )),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: LongGradientButton(
                  onPressed: () async {
                    bool created = false;
                    print("passcode: $passCode");
                    created = await passcodeController.verifyPasscode(
                        passCode, context);
                    if (created) {
                      showDialog(
                        context: context,
                        barrierDismissible:
                            true, // Set to true if you want to allow dismissing the dialog by tapping outside it
                        builder: (BuildContext context) {
                          return BackdropFilter(
                            filter: ImageFilter.blur(
                                sigmaX: 20,
                                sigmaY:
                                    20), // Adjust the blur intensity as needed
                            child: Container(
                              height: 100,
                              child: AlertDialog(
                                title: Center(
                                  child: Icon(
                                    size: 60,
                                    Icons.check_circle_outlined,
                                  ),
                                ),
                                content: Padding(
                                  padding: const EdgeInsets.only(left: 60.0),
                                  child: Text('Transaction Succesful'),
                                ),
                                actions: [
                                  Padding(
                                    padding: const EdgeInsets.only(right: 30.0),
                                    child: DialogGradientButton(
                                      title: 'Proceed',
                                      onPressed: () async {
                                        Get.to(() => WalletWithdrawal());
                                      },
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          );
                        },
                      );
                    }
                  },
                  title: 'Proceed',
                ),
              )
            ],
          ),
        ));
  }
}
