import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full justify-between bg-white">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="self-end mr-5 mt-2"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      {/* Swiper Wrapper with Centered Content */}
      <View className="flex-1 justify-center">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#40B876] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item) => (
            <View
              key={item.id}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-black text-3xl font-bold mx-10 text-center">
                  {item.title}
                </Text>
              </View>
              {/* <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                {item.description}
              </Text> */}
            </View>
          ))}
        </Swiper>
      </View>

      {/* Custom Buttons */}
      <View className="w-full items-center mb-5">
        <CustomButton
          title={"Create an account"}
          onPress={() =>
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1)
          }
          className="w-11/12 mt-10"
        />
        <CustomButton
          title={"I have an account"}
          onPress={() => router.replace("/(auth)/sign-in")}
          className="w-11/12 mt-1 border-green-400"
          bgVariant="outline"
          textVariant="primary"
        />
      </View>

      {/* Terms and Conditions Text */}
      <Text className="text-center text-black mb-5">
        By continuing, you agree to our Terms and condition {"\n"} and Privacy
        Policy
      </Text>
    </SafeAreaView>
  );
};

export default Home;

// import { router } from "expo-router";
// import { useRef, useState } from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Swiper from "react-native-swiper";

// import CustomButton from "@/components/CustomButton";
// import { onboarding } from "@/constants";

// const Home = () => {
//   const swiperRef = useRef<Swiper>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const isLastSlide = activeIndex === onboarding.length - 1;

//   return (
//     <SafeAreaView className="flex h-full items-center justify-between bg-white">
//       <Swiper
//         ref={swiperRef}
//         loop={false}
//         dot={
//           <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
//         }
//         activeDot={
//           <View className="w-[32px] h-[4px] mx-1 bg-[#40B876] rounded-full" />
//         }
//         onIndexChanged={(index) => setActiveIndex(index)}
//       >
//         {onboarding.map((item) => (
//           <View key={item.id} className="flex items-center justify-center p-5">
//             <Image
//               source={item.image}
//               className="w-full h-[300px]"
//               resizeMode="contain"
//             />
//             <View className="flex flex-row items-center justify-center w-full mt-10">
//               <Text className="text-black text-3xl font-bold mx-10 text-center">
//                 {item.title}
//               </Text>
//             </View>
//             <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
//               {item.description}
//             </Text>
//           </View>
//         ))}
//       </Swiper>
//       <TouchableOpacity
//         onPress={() => {
//           router.replace("/(auth)/sign-up");
//         }}
//         className="w-full flex justify-end items-end p-5"
//       >
//         <Text className="text-black text-md font-JakartaBold">Skip</Text>
//       </TouchableOpacity>

//       <CustomButton
//         title={"Create an account"}
//         onPress={() =>
//           isLastSlide
//             ? router.replace("/(auth)/sign-up")
//             : swiperRef.current?.scrollBy(1)
//         }
//         className="w-11/12 mt-10 mb-5"
//       />
//       <CustomButton
//         title={"I have an account"}
//         onPress={() =>
//           isLastSlide
//             ? router.replace("/(auth)/sign-in")
//             : swiperRef.current?.scrollBy(1)
//         }
//         className="w-11/12 mt-1 mb-5"
//       />
//       <Text className='text-center text-black'>By continuing, you agree to our Terms and condition {'\n'} and Privacy Policy</Text>
//     </SafeAreaView>
//   );
// };

// export default Home;
