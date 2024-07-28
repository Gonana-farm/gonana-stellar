import "package:flutter/material.dart";
import 'package:get/get.dart';
import 'package:gonana/consts.dart';
import 'package:flutter_svg/svg.dart';
import 'package:gonana/features/controllers/fiat_wallet/transaction_controller.dart';
import 'package:gonana/features/presentation/page/fiat_wallet/deposit.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../../controllers/user/user_controller.dart';
import '../../widgets/warning_widget.dart';
import 'fiat_withdrawal.dart';

class FiatWalletHome extends StatefulWidget {
  const FiatWalletHome({super.key});

  @override
  State<FiatWalletHome> createState() => _FiatWalletHomeState();
}

class _FiatWalletHomeState extends State<FiatWalletHome> {
  bool? BVNisSubmited = false;
  getBVNStatus() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    BVNisSubmited = prefs.getBool('bvnSubmission');
  }

  getBalance() async {
    await transactionController.fetchBalance();
    await transactionController.fetchTransactions();
  }

  ScrollController scrollController = ScrollController();
  bool loading = false;
  getMoreData() async {
    setState(() {
      loading = true;
    });
    await transactionController.fetchMoreTransactions();
    setState(() {
      loading = false;
    });
  }

  @override
  void initState() {
    super.initState();
    getBalance();
    getBVNStatus();
    scrollController.addListener(() {
      if (scrollController.position.pixels ==
          scrollController.position.maxScrollExtent) {
        getMoreData();
      }
    });
  }

  TransactionController transactionController =
      Get.put(TransactionController());
  UserController userController = Get.put(UserController());
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        backgroundColor: const Color(0xffF1F1F1),
        body: SingleChildScrollView(
          physics: const NeverScrollableScrollPhysics(),
          child: Column(mainAxisAlignment: MainAxisAlignment.start, children: [
            Container(
              width: double.infinity,
              height: MediaQuery.of(context).size.height * 0.35,
              decoration: const BoxDecoration(
                  gradient: LinearGradient(
                      colors: [Color(0xff29844B), Color(0xff072C27)],
                      begin: Alignment.topRight,
                      end: Alignment.bottomLeft)),
              child: Center(
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Padding(
                        padding:
                            EdgeInsets.only(top: size.height * 0.0, left: 20),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            IconButton(
                                onPressed: () {
                                  Get.back();
                                },
                                icon: const Icon(Icons.arrow_back,
                                    color: Colors.white)),
                          ],
                        ),
                      ),
                      const Padding(
                          padding: EdgeInsets.only(top: 20.0, bottom: 10),
                          child: Text('Fiat Wallet',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 14,
                                  fontWeight: FontWeight.w400))),
                      Padding(
                        padding: EdgeInsets.symmetric(vertical: 10.0),
                        child: Obx(() {
                          return Text(
                              'NGN ${transactionController.balanceModel.value.balance ?? 0}',
                              textAlign: TextAlign.center,
                              style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 24,
                                  fontWeight: FontWeight.w600));
                        }),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10.0),
                        child: Center(
                          child: SizedBox(
                            width: 180,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InkWell(
                                  onTap: () {
                                    Get.to(() => const FiatWithdrawal());
                                  },
                                  child: SizedBox(
                                    height: 50,
                                    child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceEvenly,
                                        children: [
                                          SvgPicture.asset(
                                            'assets/svgs/withdrawal.svg',
                                            colorFilter: const ColorFilter.mode(
                                                Colors.white, BlendMode.srcIn),
                                          ),
                                          const Text(
                                            'Withdraw',
                                            style: TextStyle(
                                                color: primaryColor,
                                                fontSize: 12,
                                                fontWeight: FontWeight.w400),
                                          )
                                        ]),
                                  ),
                                ),
                                InkWell(
                                  onTap: () {
                                    Get.to(() => const Deposit());
                                  },
                                  child: SizedBox(
                                    height: 50,
                                    child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceEvenly,
                                        children: [
                                          SvgPicture.asset(
                                            'assets/svgs/money1.svg',
                                            colorFilter: const ColorFilter.mode(
                                                Colors.white, BlendMode.srcIn),
                                          ),
                                          const Text(
                                            'Deposit',
                                            style: TextStyle(
                                                color: primaryColor,
                                                fontSize: 12,
                                                fontWeight: FontWeight.w400),
                                          )
                                        ]),
                                  ),
                                )
                              ],
                            ),
                          ),
                        ),
                      ),
                    ]),
              ),
            ),
            ((BVNisSubmited != null && BVNisSubmited!) ||
                        (userController.userModel != null &&
                            userController
                                    .userModel.value.virtualAccountNumber !=
                                null &&
                            userController.userModel.value.virtualAccountNumber!
                                .isNotEmpty)) ||
                    (userController.userModel != null &&
                        userController.userModel.value.country != null &&
                        !userController.userModel.value.country!
                            .contains("Nigeria"))
                ? sizeVer(1)
                : sizeVer(20),
            ((BVNisSubmited != null && BVNisSubmited!) ||
                        (userController.userModel != null &&
                            userController
                                    .userModel.value.virtualAccountNumber !=
                                null &&
                            userController.userModel.value.virtualAccountNumber!
                                .isNotEmpty)) ||
                    (userController.userModel != null &&
                        userController.userModel.value.country != null &&
                        !userController.userModel.value.country!
                            .contains("Nigeria"))
                ? Container(height: 1)
                : WarningWidget(),
            ((BVNisSubmited != null && BVNisSubmited!) ||
                        (userController.userModel != null &&
                            userController
                                    .userModel.value.virtualAccountNumber !=
                                null &&
                            userController.userModel.value.virtualAccountNumber!
                                .isNotEmpty)) ||
                    (userController.userModel != null &&
                        userController.userModel.value.country != null &&
                        !userController.userModel.value.country!
                            .contains("Nigeria"))
                ? sizeVer(1)
                : sizeVer(20),
            (transactionController.transactionModel != null &&
                    transactionController
                            .transactionModel!.value.transactions !=
                        null &&
                    transactionController
                        .transactionModel!.value.transactions!.isNotEmpty)
                ? Container(
                    height: MediaQuery.of(context).size.height * 0.65,
                    child: Column(
                      children: [
                        Expanded(
                          child: Padding(
                            padding: EdgeInsets.only(
                                bottom:
                                    MediaQuery.of(context).size.height * 0.12),
                            child: ListView.builder(
                              controller: scrollController,
                              itemCount: transactionController
                                  .transactionModel!.value.transactions!.length,
                              itemBuilder: (context, index) {
                                // Build and return your transaction item widget here
                                final reversedIndex = (transactionController
                                            .transactionModel!
                                            .value
                                            .transactions!
                                            .length -
                                        1) -
                                    index;
                                return FutureBuilder<void>(
                                  future: getBalance(),
                                  builder: (context, snapshot) {
                                    if (snapshot.connectionState ==
                                        ConnectionState.done) {
                                      // Build your UI here
                                      return Obx(() {
                                        return transactionController
                                                    .transactionModel!
                                                    .value
                                                    .transactions![
                                                        reversedIndex]!
                                                    .transactions!
                                                    .type ==
                                                "DEBIT"
                                            ? Padding(
                                                padding:
                                                    const EdgeInsets.symmetric(
                                                        horizontal: 10,
                                                        vertical: 8),
                                                child: Container(
                                                    height: 56,
                                                    // width: 342,
                                                    decoration: BoxDecoration(
                                                      color: Colors.white,
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              5),
                                                    ),
                                                    child: Row(
                                                        mainAxisAlignment:
                                                            MainAxisAlignment
                                                                .spaceEvenly,
                                                        children: [
                                                          SvgPicture.asset(
                                                              'assets/svgs/debit_icon.svg'),
                                                          Column(
                                                              mainAxisAlignment:
                                                                  MainAxisAlignment
                                                                      .center,
                                                              children: [
                                                                Obx(() {
                                                                  return Text(
                                                                      '${transactionController.transactionModel!.value.transactions![reversedIndex].transactions!.time}',
                                                                      style: const TextStyle(
                                                                          fontSize:
                                                                              10,
                                                                          fontWeight: FontWeight
                                                                              .w400,
                                                                          color:
                                                                              Color(0xff5F5E5E)));
                                                                })
                                                              ]),
                                                          Column(
                                                              mainAxisAlignment:
                                                                  MainAxisAlignment
                                                                      .center,
                                                              children: [
                                                                const Text(
                                                                    'Debit',
                                                                    style: TextStyle(
                                                                        fontSize:
                                                                            12,
                                                                        fontWeight:
                                                                            FontWeight
                                                                                .w600,
                                                                        color:
                                                                            redColor)),
                                                                Obx(() {
                                                                  return Text(
                                                                      '₦ ${transactionController.transactionModel!.value.transactions![reversedIndex]!.transactions!.amountSettled}',
                                                                      style: const TextStyle(
                                                                          fontSize:
                                                                              11,
                                                                          fontWeight: FontWeight
                                                                              .w600,
                                                                          color:
                                                                              Colors.black));
                                                                }),
                                                              ])
                                                        ])))
                                            : Obx(() {
                                                return transactionController
                                                            .transactionModel!
                                                            .value
                                                            .transactions![
                                                                reversedIndex]!
                                                            .transactions!
                                                            .type ==
                                                        "CREDIT"
                                                    ? Padding(
                                                        padding:
                                                            const EdgeInsets
                                                                .symmetric(
                                                                horizontal: 10,
                                                                vertical: 8),
                                                        child: Container(
                                                            height: 56,
                                                            width: 342,
                                                            decoration:
                                                                BoxDecoration(
                                                              color:
                                                                  Colors.white,
                                                              borderRadius:
                                                                  BorderRadius
                                                                      .circular(
                                                                          5),
                                                            ),
                                                            child: Row(
                                                                mainAxisAlignment:
                                                                    MainAxisAlignment
                                                                        .spaceEvenly,
                                                                children: [
                                                                  SvgPicture.asset(
                                                                      'assets/svgs/credit_icon.svg'),
                                                                  Column(
                                                                      mainAxisAlignment:
                                                                          MainAxisAlignment
                                                                              .center,
                                                                      children: [
                                                                        Obx(() {
                                                                          return Text(
                                                                              '${transactionController.transactionModel!.value.transactions![reversedIndex]!.transactions!.time}',
                                                                              style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w400, color: Color(0xff5F5E5E)));
                                                                        })
                                                                      ]),
                                                                  Column(
                                                                      mainAxisAlignment:
                                                                          MainAxisAlignment
                                                                              .center,
                                                                      children: [
                                                                        const Text(
                                                                            'Credit',
                                                                            style: TextStyle(
                                                                                fontSize: 12,
                                                                                fontWeight: FontWeight.w600,
                                                                                color: greenColor)),
                                                                        Obx(() {
                                                                          return Text(
                                                                              '₦ ${transactionController.transactionModel!.value.transactions![reversedIndex]!.transactions!.amountSettled}',
                                                                              style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Colors.black));
                                                                        }),
                                                                      ])
                                                                ])))
                                                    : Container();
                                              });
                                      });
                                    } else if (snapshot.hasError) {
                                      return Center(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.center,
                                          children: [
                                            sizeVer(MediaQuery.of(context)
                                                    .size
                                                    .height *
                                                0.05),
                                            SvgPicture.asset(
                                              "assets/svgs/empty_product.svg",
                                              width: 189.71,
                                              height: 156.03,
                                            ),
                                            const Text(
                                              'ERROR',
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                color: Colors.black,
                                                fontSize: 24,
                                                fontFamily: 'Proxima Nova',
                                                fontWeight: FontWeight.w600,
                                              ),
                                            ),
                                            sizeVer(10),
                                            const Text(
                                              'AN ERROR OCCURRED, TRY AGAIN LATER',
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                color: Colors.black,
                                                fontSize: 14,
                                                fontFamily: 'Proxima Nova',
                                                fontWeight: FontWeight.w400,
                                              ),
                                            ),
                                          ],
                                        ),
                                      );
                                    } else {
                                      return Center(
                                          child: Container(
                                              height: 50,
                                              width: 50,
                                              child:
                                                  CircularProgressIndicator()));
                                    }
                                  },
                                );
                              },
                            ),
                          ),
                        ),
                        sizeVer(10),
                        !loading
                            ? Container(height: 1)
                            : const SizedBox(
                                height: 30,
                                width: 30,
                                child: CircularProgressIndicator(
                                  color: Color.fromRGBO(41, 132, 75, 1),
                                ))
                      ],
                    ),
                  )
                : Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        sizeVer(MediaQuery.of(context).size.height * 0.05),
                        SvgPicture.asset(
                          "assets/svgs/empty_product.svg",
                          width: 189.71,
                          height: 156.03,
                        ),
                        const Text(
                          'Sorry! no transaction yet',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.black,
                            fontSize: 24,
                            fontFamily: 'Proxima Nova',
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        sizeVer(10),
                        const Text(
                          'All transactions would show here',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.black,
                            fontSize: 14,
                            fontFamily: 'Proxima Nova',
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                      ],
                    ),
                  ),
            // Transactions are null or empty, display a message or placeholder content

            // CreditWidget(),
            // DebitWidget(),
            // CreditWidget(),
            // DebitWidget(),
            // CreditWidget(),
            // DebitWidget(),
          ]),
        ));
  }
}

class DebitWidget extends StatefulWidget {
  const DebitWidget({
    super.key,
  });

  @override
  State<DebitWidget> createState() => _DebitWidgetState();
}

class _DebitWidgetState extends State<DebitWidget> {
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        child: Container(
            height: 56,
            width: 342,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(5),
            ),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  SvgPicture.asset('assets/svgs/debit_icon.svg'),
                  const Column(children: [
                    Text('Sent to Jane Doe',
                        style: TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            color: Colors.black)),
                    Text('07:06 PM THU, Sep 14 2023',
                        style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w400,
                            color: Color(0xff5F5E5E)))
                  ]),
                  const Column(children: [
                    Text('Debit',
                        style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                            color: redColor)),
                    Text('₦ 11,000',
                        style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: Colors.black)),
                  ])
                ])));
  }
}

class CreditWidget extends StatefulWidget {
  const CreditWidget({
    super.key,
  });

  @override
  State<CreditWidget> createState() => _CreditWidgetState();
}

class _CreditWidgetState extends State<CreditWidget> {
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        child: Container(
            height: 56,
            width: 342,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(5),
            ),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  SvgPicture.asset('assets/svgs/credit_icon.svg'),
                  const Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text('07:06 PM THU, Sep 14 2023',
                            style: TextStyle(
                                fontSize: 10,
                                fontWeight: FontWeight.w400,
                                color: Color(0xff5F5E5E)))
                      ]),
                  const Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text('Credit',
                            style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                color: greenColor)),
                        Text('₦ 11,000',
                            style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.w600,
                                color: Colors.black)),
                      ])
                ])));
  }
}
