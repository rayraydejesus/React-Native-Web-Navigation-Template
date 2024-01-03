#!/bin/sh

echo "\nRebuilding react-native.config file...\n"
# "\nEditing iOS flags...\n"
rm react-native.config.js
echo "// CONFIG: React Native Vector Icons iOS\nmodule.exports = {\n\tdependencies: {\n\t\t'react-native-vector-icons': {\n\t\t\tplatforms: {\n\t\t\t\tios: null,\n\t\t\t},\n\t\t},\n\t},\n};\n" > react-native.config.js
echo "\n...Done."
# Package config
#   // CONFIG: React Native Vector Icons iOS
#   module.exports = {
#     dependencies: {
#       'react-native-vector-icons': {
#         platforms: {
#           ios: null,
#         },
#       },
#     },
#   };

#echo "\nReplacing NPM with Yarn...\n"
#rm package.lock.json
echo "\nInstalling dependencies with Yarn...\n"
yarn install

echo "\nInstalling iOS Pods...\n"
cd ios
pod install

echo "\n IGNORE next message. ALL node dependencies and cocoa pods are installed. Happy Coding!\n"