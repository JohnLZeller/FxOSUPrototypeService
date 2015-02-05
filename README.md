# FxOSUPrototypeService

# Overview

I used [PhoneNumberService](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.js) as a base, and basically rewrote all of the [PhoneNumberService](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.js) stuff into my own name, FxOSUPrototypeService.

It seems like I am very close to having this working.

I rebuilt B2G with the new FxOSUPrototypeService, and then launched B2G with jsconsole. From there I called my new API navigator.mozFxOSUPrototypeService and received an error of NS_ERROR_FACTORY_NOT_REGISTERED. I am not sure what else I am missing here. I have used mxr to find all the mentioned of PhoneNumberService, so that I could make sure that my own service is mentioned in the same places. I even places the FxOSUPrototypeService into the package manifests for b2g, browser, and android... since later I'll want to be using those anyway.

Here is the [diff of mozilla-central with my changes](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/FxOSUPrototypeService.diff).

## Changes I've Made

I have added the following files:
* dom/fxosuprototype/[FxOSUPrototypeService.js](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/FxOSUPrototypeService.js)
* dom/fxosuprototype/[FxOSUPrototypeService.manifest](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/FxOSUPrototypeService.manifest)
* dom/fxosuprototype/[moz.build](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/moz.build)
* dom/webidl/[FxOSUPrototypeService.webidl](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/webidl/FxOSUPrototypeService.webidl)

And I have modified these files:
* b2g/installer/[package-manifest.in](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/b2g/installer/package-manifest.in#L366-L367) (Lines 366 to 376)
* browser/installer/[package-manifest.in](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/browser/installer/package-manifest.in#L561-L562) (Lines 561 to 562)
* mobile/android/installer/[package-manifest.in](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/mobile/android/installer/package-manifest.in#L303-L304) (Lines 303 to 304)
* dom/apps/[PermissionsTable.jsm](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/apps/PermissionsTable.jsm#L218-L223) (Lines 218 to 223)
* dom/webidl/[moz.build](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/webidl/moz.build#L146) (Line 146)
