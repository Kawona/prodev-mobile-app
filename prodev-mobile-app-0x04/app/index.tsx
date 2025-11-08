import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles as mainStyles } from "@/styles/_mainstyle";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={mainStyles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={mainStyles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Welcome to ProDev</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>
              Learn and build real-world mobile UI layouts.
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
          <View style={mainStyles.buttonGroup}>
            <TouchableOpacity
              style={mainStyles.buttonPrimary}
              onPress={() => router.push("/join")}
            >
              <Text style={mainStyles.buttonPrimaryText}>Create account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mainStyles.buttonSecondary}
              onPress={() => router.push("/signin")}
            >
              <Text style={mainStyles.buttonSecondaryText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
