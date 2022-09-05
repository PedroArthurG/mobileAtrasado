import React from "react";
import { Text, View, Image } from "react-native";
import { IMensagemState, IMensagem } from "../../interfaces/Mensagem.interface";
import styles from "./styles";
import { format } from "date-fns";

export default function Card({ data }: IMensagemState) {
  return (
    <View >
      <Text>
        {data.user.name} - {""}
        {format(new Date(data.created_at), "dd/MM/yyyy HH:mm:ss")}
      </Text>
      <View >
        <Text>Título: {data.titulo}</Text>
        <Text>Mensagem: {data.mensagem}</Text>
        <Image source={{ uri: data.imagem }} style={styles.img} />
        <View style={styles.topicos}>
          {data.topicos.map((i) => (
            <View key={i.id} style={styles.topicos}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
