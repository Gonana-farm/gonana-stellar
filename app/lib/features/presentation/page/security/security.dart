import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:gonana/features/presentation/page/home.dart';
import 'package:gonana/features/presentation/page/security/currency.dart';
import 'package:gonana/features/presentation/page/security/reset_password.dart';
import 'package:gonana/features/presentation/page/security/change_pin.dart';
import 'package:gonana/features/presentation/page/security/reset_pin.dart';
import 'package:gonana/features/presentation/page/settings/settings.dart';

import '../../../controllers/auth/passcode_controller.dart';
import '../../widgets/widgets.dart';

class Security extends StatefulWidget {
  const Security({super.key});

  @override
  State<Security> createState() => _SecurityState();
}

PasscodeController passcodeController = Get.put(PasscodeController());

class _SecurityState extends State<Security> {
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
                Get.to(() => HomePage(navIndex: 3));
              })),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24.0, 8.0, 24.0, 24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Security',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
                textAlign: TextAlign.left,
              ),
              const Padding(
                padding: EdgeInsets.only(bottom: 28.0),
                child: Text(
                  'Strengthen your security',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w400),
                  textAlign: TextAlign.left,
                ),
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 14.0, horizontal: 0.0),
                    child: GestureDetector(
                      onTap: () {
                        Get.to(() => ResetPassword());
                      },
                      child: Container(
                          // width: 342,
                          height: 56,
                          decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(5)),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Padding(
                                padding: EdgeInsets.only(left: 15.0),
                                child: Text(
                                  'Reset Password',
                                  style: TextStyle(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w600),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(right: 15.0),
                                child: IconButton(
                                    onPressed: () {
                                      Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) =>
                                                  ResetPassword()));
                                    },
                                    icon: const Icon(Icons.arrow_forward_ios)),
                              )
                            ],
                          )),
                    ),
                  ),
                  // Padding(
                  //   padding: const EdgeInsets.symmetric(
                  //       vertical: 14.0, horizontal: 0.0),
                  //   child: GestureDetector(
                  //     onTap: () async {
                  //       Get.to(() => ChangePin());
                  //     },
                  //     child: Container(
                  //         // width: 342,
                  //         height: 56,
                  //         decoration: BoxDecoration(
                  //             color: Colors.white,
                  //             borderRadius: BorderRadius.circular(5)),
                  //         child: Row(
                  //           mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  //           children: [
                  //             const Padding(
                  //               padding: EdgeInsets.only(left: 15.0),
                  //               child: Text(
                  //                 'Change Pin',
                  //                 style: TextStyle(
                  //                     fontSize: 14,
                  //                     fontWeight: FontWeight.w600),
                  //               ),
                  //             ),
                  //             Padding(
                  //               padding: const EdgeInsets.only(right: 15.0),
                  //               child: IconButton(
                  //                   onPressed: () {},
                  //                   icon: const Icon(Icons.arrow_forward_ios)),
                  //             )
                  //           ],
                  //         )),
                  //   ),
                  // ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 14.0, horizontal: 0.0),
                    child: GestureDetector(
                      onTap: () async {
                        await successDialog(context);
                      },
                      child: Container(
                          // width: 342,
                          height: 56,
                          decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(5)),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Padding(
                                padding: EdgeInsets.only(left: 15.0),
                                child: Text(
                                  'Reset Pin',
                                  style: TextStyle(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w600),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(right: 15.0),
                                child: IconButton(
                                    onPressed: () async {
                                      await successDialog(context);
                                    },
                                    icon: const Icon(Icons.arrow_forward_ios)),
                              )
                            ],
                          )),
                    ),
                  ),
                  // Padding(
                  //   padding: const EdgeInsets.symmetric(
                  //       vertical: 14.0, horizontal: 0.0),
                  //   child: GestureDetector(
                  //     onTap: () {
                  //       Get.to(() => Currency());
                  //     },
                  //     child: Container(
                  //         // width: 342,
                  //         height: 56,
                  //         decoration: BoxDecoration(
                  //             color: Colors.white,
                  //             borderRadius: BorderRadius.circular(5)),
                  //         child: Row(
                  //           mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  //           children: [
                  //             const Padding(
                  //               padding: EdgeInsets.only(left: 15.0),
                  //               child: Text(
                  //                 'Change currency',
                  //                 style: TextStyle(
                  //                     fontSize: 14,
                  //                     fontWeight: FontWeight.w600),
                  //               ),
                  //             ),
                  //             Padding(
                  //               padding: const EdgeInsets.only(right: 15.0),
                  //               child: IconButton(
                  //                   onPressed: () {},
                  //                   icon: const Icon(Icons.arrow_forward_ios)),
                  //             )
                  //           ],
                  //         )),
                  //   ),
                  // )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  Future<dynamic> successDialog(BuildContext context) {
    return showDialog(
      context: context,
      barrierDismissible:
          true, // Set to true if you want to allow dismissing the dialog by tapping outside it
      builder: (BuildContext context) {
        return BackdropFilter(
          filter: ImageFilter.blur(
              sigmaX: 20, sigmaY: 20), // Adjust the blur intensity as needed
          child: Container(
            height: 100,
            child: AlertDialog(
              title: const Center(
                child: Icon(
                  size: 60,
                  Icons.check_circle_outlined,
                ),
              ),
              content: Padding(
                padding: EdgeInsets.only(left: 0.0),
                child: Container(
                  height: 50,
                  child: Column(
                    // crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Center(
                        child: Text(
                          'Are you sure you want to reset your pin',
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              actions: [
                Center(
                  child: DialogGradientButton(
                    title: 'Yes, I want to reset my pin',
                    onPressed: () async {
                      Get.to(() => const ResetPin());
                      bool isPasscode =
                          await passcodeController.resetPin(context);
                      // if (isPasscode) {
                      //   Get.to(() => const ResetPin());
                      // }
                    },
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(bottom: 10, top: 20),
                  child: Center(
                    child: DialogWhiteButton(
                      title: 'No, go back',
                      onPressed: () {
                        Get.back();
                        Navigator.pop(context);
                      },
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
