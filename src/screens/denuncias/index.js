import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Styles from "./styles";

export default function ({ navigation }) {
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [description, setDescription] = useState("");
  const [typeOfReports, setTypeOfReports] = useState("");
  const [denuncia, setDenucia] = useState("");
  const handleCamera = () => {
    navigation.navigate("CamApp");
  };

  return (
    <ScrollView
      contentContainerStyle={Styles.conteiner}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.conteinerLogo}>
        <Image
          source={require("../../assets/logo-sem-fundo-red.png")}
          style={Styles.imageLogo}
        />
      </View>
      <Text style={Styles.text}>Denúncias</Text>
      <View style={Styles.styleInput}>
        <TextInput
          style={{
            borderColor: "transparent",
            backgroundColor: "#e9ecef",
            height: 50,
            borderRadius: 10,
            padding: 10,
          }}
          value={street}
          onChangeText={(text) => setStreet(text)}
          placeholder="Rua"
        />
        <TextInput
          style={{
            borderColor: "transparent",
            backgroundColor: "#e9ecef",
            height: 50,
            borderRadius: 10,
            padding: 10,
          }}
          value={neighborhood}
          onChangeText={(text) => setNeighborhood(text)}
          placeholder="Bairro"
        />

        <TextInput
          style={{
            borderColor: "transparent",
            backgroundColor: "#e9ecef",
            height: 50,
            borderRadius: 10,
            padding: 10,
          }}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Descrição"
        />
        <Text>Tipo de Denúncia:</Text>
        <Picker
          selectedValue={denuncia}
          onValueChange={(itemValue, itemIndex) => setDenucia(itemValue)}
        >
          <Picker.Item
            key={3}
            value="Desobstrução de Bueiros"
            label="Desobstrução de Bueiros"
          />
          <Picker.Item
            key={2}
            value="Capina em Logradouro"
            label="Capina em Longradouro"
          />
          <Picker.Item
            key={4}
            value="Remoção de Entulho"
            label="Remoção de Entulho"
          />
          <Picker.Item
            key={5}
            value="Reparo de Buraco"
            label="Remoção de Buraco"
          />
        </Picker>
        <TouchableOpacity style={Styles.button} onPress={handleCamera}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            Inserir Imagem
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
