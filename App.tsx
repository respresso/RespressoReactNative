/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * react-native-localize use from
 * https://github.com/react-native-community/react-native-localize/blob/master/example/src/SyncExample.js
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, I18nManager, Image} from 'react-native';

import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";

const colors = require("./respresso/colors/RespressoColors.json");

interface StringArray {
  [lang: string]: Function;
}
const translationGetters: StringArray = {
  en: () => require("./respresso/localization/respresso.strings-en.json"),
  de: () => require("./respresso/localization/respresso.strings-de.json")
};

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };
  const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations[languageTag] = translationGetters[languageTag]();
  i18n.locale = languageTag;
};

export default class App extends Component<any> {
  constructor(props: any) {
    super(props);
    setI18nConfig(); // set initial config
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./respresso/images/tomcat.png')} />
        <Text style={styles.welcome}>{i18n.t("welcome")}</Text>
        <Text style={styles.instructions}>{i18n.t("firstname")} {i18n.t("lastname")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.kek
  },
  instructions: {
    textAlign: 'center',
    color: colors.barna,
    marginBottom: 5,
  },
});
