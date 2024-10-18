import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="white" translucent={false} />
          <Image
            style={styles.logo}
            source={require("./src/assets/logo.png")}
          />
          <TextInput
            placeholder="Celular, username ou email"
            style={styles.input}
          />
          <TextInput placeholder="Sua senha" style={styles.input} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.fortgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome5 name="facebook" size={25} color="#399fff" />
            <Text style={styles.facebookText}>Conectar ao facebook</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: "3%" }}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastra-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 212,
    height: 89,
    marginTop: Platform.OS === "android" ? "13%" : "20%",
    marginBottom: Platform.OS === "android" ? "13%" : "15%",
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#f4f3f3",
    marginBottom: 20,
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  fortgotText: {
    color: "#399fff",
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#399fff",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "white",
    fontSize: 17,
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
  },
  facebookText: {
    color: "#399fff",
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: "10%",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  divisorLine: {
    width: "45%",
    height: 2,
    backgroundColor: "#efeded",
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  signUpText: {
    color: "#c4c4c4",
    paddingRight: 5,
  },
  signUpButton: {
    color: "#399fff",
    fontWeight: "bold",
  },
});
