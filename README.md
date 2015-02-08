# FxOSUPrototypeService

# Overview

I used [PhoneNumberService.js](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.js) and [PhoneNumberService.manifest](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.manifest) as a base. I then rewrote all of the PhoneNumberService stuff into my own name, FxOSUPrototypeService.

Here is the [diff of mozilla-central with my changes](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/FxOSUPrototypeService.diff) to [mozilla-central](http://hg.mozilla.org/mozilla-central/).

## Current Problems

I am attempting to build B2G onto my Flame, packaging this new FxOSUPrototypeService. It works fine on B2G-Desktop, but when I call navigator.mozFxOSUPrototypeService from the WebIDE on the Flame, I get back 'undefined'. What am I missing to properly package this with my B2G device build?


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
* dom/[moz.build](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/moz.build#L55) (Line 55)
