import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:gonana/features/presentation/page/security/security.dart';
import 'package:gonana/features/presentation/page/security/verify_changed_password.dart';
import 'package:gonana/features/presentation/page/settings/settiings_profile.dart';
import 'package:gonana/features/presentation/widgets/numpad.dart';
import 'package:gonana/features/presentation/widgets/pinWidget.dart';
import 'package:gonana/features/presentation/widgets/widgets.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ConfirmPassword extends StatefulWidget {
  final String? password;
  const ConfirmPassword({super.key, this.password});

  @override
  State<ConfirmPassword> createState() => _ConfirmPasswordState();
}

class _ConfirmPasswordState extends State<ConfirmPassword> {
  TextEditingController textEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffF1F1F1),
      appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          leading: IconButton(
              icon: const Icon(
                Icons.arrow_back,
                color: Colors.black,
              ),
              onPressed: () {
                Navigator.pop(context);
              })),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24.0, 0.0, 24.0, 24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              const SizedBox(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Four Digit passcode',
                      style:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
                      textAlign: TextAlign.left,
                    ),
                    Text(
                      'Enter your four digit password to confirm your new password',
                      style:
                          TextStyle(fontSize: 14, fontWeight: FontWeight.w400),
                      textAlign: TextAlign.left,
                    ),
                  ],
                ),
              ),
              SizedBox(
                width: MediaQuery.of(context).size.width * 0.75,
                child: PinWidget(textEditingController: textEditingController),
              ),
              NumPad(
                controller: textEditingController,
                delete: () {},
              ),
              LongGradientButton(
                  title: 'Proceed',
                  onPressed: () async {
                    bool created = false;
                    print("passcode: $textEditingController");
                    created = await passcodeController.verifyPasscode(
                        textEditingController.text, context);
                    if (created) {
                      SharedPreferences prefs =
                          await SharedPreferences.getInstance();
                      var email = prefs.getString("userEmail");
                      bool reset = await passcodeController.resetPassword(
                          context, email, widget.password);
                      if (reset) {
                        Get.offAll(Security());
                      }
                    }
                  })
            ],
          ),
        ),
      ),
    );
  }
}
