import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:get/get.dart';
import 'package:gonana/consts.dart';
import 'package:gonana/features/controllers/geolocator/geoservices.dart';
import 'package:gonana/features/controllers/taxonomy/taxonomy_controller.dart';
import 'package:gonana/features/data/models/taxonomy_model.dart';
import 'package:gonana/features/presentation/page/fiat_wallet/register_bank.dart';
import 'package:gonana/features/presentation/page/store/store_confirm_screen.dart';
import 'package:gonana/features/presentation/page/store/store_logistics.dart';
import 'package:gonana/features/presentation/widgets/widgets.dart';

import '../../../controllers/cart/cart_controller.dart';
import '../../../controllers/market/market_controllers.dart';

class AddProduct2 extends StatefulWidget {
  const AddProduct2({super.key});

  @override
  State<AddProduct2> createState() => _AddProduct2State();
}

class _AddProduct2State extends State<AddProduct2> {
  final taxonomyController = Get.put(TaxonomyController());
  final productController = Get.put(ProductController());
  @override
  LocationServiceController locationController =
      Get.put(LocationServiceController());
  final TextEditingController _hashTags = TextEditingController();
  final TextEditingController _price = TextEditingController();
  final TextEditingController _address = TextEditingController();
  final TextEditingController _quantity = TextEditingController();
  final TextEditingController _weight = TextEditingController();
  final TextEditingController _productCategory = TextEditingController();
  String get hashTags => _hashTags.text;
  String get price => _price.text;
  String get address => _address.text;
  String get quantity => _quantity.text;
  String get weight => _weight.text;
  String get productCategory => _productCategory.text;
  String selectedCategory = "";
  String? currentAddress;
  Position? currentPosition;
  double lat = 0.0;
  double long = 0.0;
  late var coordinates = [lat.toString(), long.toString()];
  Rx<TaxonomyModel?> selectedTaxonomy = TaxonomyModel().obs;
  CartController cartController = Get.put(CartController());
  bool isValidated = false;
  bool selfShipping = false;

  @override
  void initState() {
    // taxonomyController.getTaxonomy();
    locationController.determinePosition();
    getPosition();
    super.initState();
  }

  Future<void> getPosition() async {
    final hasPermission = await locationController.determinePosition();
    if (!hasPermission) return;
    await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high)
        .then((Position position) {
      setState(() => currentPosition = position);
      getAddress(currentPosition!);
      assignCordinates();
      // productController.updateCoordinates(
      //   lat,
      //   long
      // );
      productController.updateGeoLong(long);
      productController.updateGeoLat(lat);
    }).catchError((e) {
      debugPrint(e);
    });
  }

  void assignCordinates() async {
    setState(() {
      lat = currentPosition!.latitude;
      long = currentPosition!.longitude;
    });
    log("$lat");
    log("$long");
    log(coordinates.toString());
  }

  void getAddress(Position position) async {
    await placemarkFromCoordinates(
            currentPosition!.latitude, currentPosition!.longitude)
        .then((List<Placemark> placemarks) {
      Placemark place = placemarks[0];
      setState(() {
        currentAddress = '${place.subAdministrativeArea}, ${place.country}';
        productController.updateAddress(currentAddress!);
      });
    }).catchError((e) {
      debugPrint(e);
    });
  }

  final _productKey = GlobalKey<FormState>();
  dynamic argumentData = Get.arguments;
  @override
  Widget build(BuildContext context) {
    bool selfShipping = argumentData[0]["selfShipping"];
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
              color: Colors.black,
            )),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            Expanded(
              child: ListView(
                children: [
                  Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(
                          width: double.infinity,
                          child: Text(
                            'Create Product',
                            style: TextStyle(
                                fontSize: 24, fontWeight: FontWeight.w600),
                            textAlign: TextAlign.left,
                          ),
                        ),
                        const SizedBox(height: 20),
                        Form(
                          key: _productKey,
                          child: Column(
                            children: [
                              SizedBox(
                                  // height: 82,
                                  width: MediaQuery.of(context).size.width,
                                  child: EnterFormText(
                                    validator: inputValidator,
                                    onChanged: (price) {
                                      productController.updateAmount(price);
                                    },
                                    controller: _price,
                                    keyboardType: TextInputType.number,
                                    label: 'Price',
                                    hint: 'Enter the amount',
                                  )),
                              const SizedBox(height: 10),
                              SizedBox(
                                  // height: 82,
                                  width: MediaQuery.of(context).size.width,
                                  child: EnterFormText(
                                    validator: inputValidator,
                                    onChanged: (quantity) {
                                      productController
                                          .updateQuantity(quantity);
                                    },
                                    controller: _quantity,
                                    keyboardType: TextInputType.number,
                                    label: 'Quantity',
                                    hint: 'Unit number of items',
                                    // validator: inputValidator(_quantity.text),
                                  )),
                              const SizedBox(height: 10),
                              SizedBox(
                                  // height: 82,
                                  width: MediaQuery.of(context).size.width,
                                  child: EnterFormText(
                                    validator: inputValidator,
                                    onChanged: (weight) {
                                      productController.updateWeight(weight);
                                    },
                                    controller: _weight,
                                    keyboardType: TextInputType.number,
                                    label: 'Weight',
                                    hint: 'Weight in KG',
                                  )),
                              const SizedBox(height: 10),
                              SizedBox(
                                  width: MediaQuery.of(context).size.width,
                                  child: EnterFormText(
                                      validator: inputValidator,
                                      onChanged: (weight) {
                                        productController
                                            .updateAddress(address);
                                      },
                                      controller: _address,
                                      label: 'Product Address',
                                      hint: 'Enter address for pick up')),
                              const SizedBox(height: 10),
                              !selfShipping
                                  ? Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.start,
                                      children: [
                                        ShortGradientButton(
                                            title: 'Validate',
                                            onPressed: () async {
                                              var isSuccess =
                                                  await cartController
                                                      .buyValidateProduct(
                                                          address, context);
                                              if (isSuccess == true) {
                                                log('isSUccess: $isSuccess');
                                                SuccessSnackbar.show(context,
                                                    'Address succesfully validated');
                                                setState(() {
                                                  isValidated = true;
                                                });
                                              } else {
                                                ErrorSnackbar.show(context,
                                                    'Address not validated');
                                              }
                                            }),
                                      ],
                                    )
                                  : Container(height: 1),
                            ],
                          ),
                        ),
                        const SizedBox(height: 10),
                        sizeVer(20),
                        const Padding(
                          padding: EdgeInsets.symmetric(horizontal: 10.0),
                          child: Text(
                            "Note: You would be charged 5% on every successful product sale",
                            style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                                color: Colors.red),
                          ),
                        )
                      ]),
                ],
              ),
            ),
            LongGradientButton(
                title: 'Proceed',
                onPressed: () {
                  bool isValid = _productKey.currentState!.validate();
                  if (
                      // selfShipping &&
                      isValid) {
                    log('$currentPosition');
                    Get.to(
                      () => const ConfirmScreen(),
                    );
                  }
                  // else {
                  //   ErrorSnackbar.show(
                  //       context, "Input and validate your address");
                  // }
                })
          ],
        ),
      ),
    );
  }
}
