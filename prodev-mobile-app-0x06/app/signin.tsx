import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-10">
      {/* Header Logo & Close */}
      <View className="flex-row justify-between items-center mb-10">
        <Image source={HEROLOGOGREEN} />
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text className="text-gray-500 text-lg">Close</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View className="mb-8">
        <Text className="text-3xl font-bold text-black">Welcome back</Text>
        <Text className="text-gray-500 text-lg">Sign in to continue</Text>
      </View>

      {/* Form */}
      <View>
        <Text className="text-black font-medium mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          className="border border-gray-300 rounded-md px-3 py-3 mb-4"
        />

        <Text className="text-black font-medium mb-1">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
          className="border border-gray-300 rounded-md px-3 py-3 mb-6"
        />

        <TouchableOpacity className="bg-[#34967C] py-4 rounded-md mb-4">
          <Text className="text-center text-white font-semibold text-lg">
            Sign in
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-[#34967C] font-medium mb-6">
          Forgot your password?
        </Text>

        {/* Divider */}
        <View className="flex-row items-center justify-center mb-6">
          <View className="h-px flex-1 bg-gray-300" />
          <Text className="px-3 text-gray-500">or</Text>
          <View className="h-px flex-1 bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <View className="gap-3">
          <TouchableOpacity className="flex-row items-center justify-center gap-3 border border-gray-300 py-3 rounded-md">
            <Image source={GOOGLELOGO} />
            <Text className="text-gray-700 font-medium">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center gap-3 border border-gray-300 py-3 rounded-md">
            <Image source={FACEBOOKLOGO} />
            <Text className="text-gray-700 font-medium">
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Signup Redirect */}
      <View className="flex-row justify-center mt-8">
        <Text className="text-gray-600">Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/join")}>
          <Text className="text-[#34967C] font-semibold"> Create one</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
