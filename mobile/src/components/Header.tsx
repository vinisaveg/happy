import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  showCancel = true,
}) => {
  const navigation = useNavigation();

  const handleGoBackToAppHomepage = () => {
    navigation.navigate("OrphanagesMap");
  };

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomepage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9fafc",
    borderBottomWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    color: "#8fa7b3",
  },
});
