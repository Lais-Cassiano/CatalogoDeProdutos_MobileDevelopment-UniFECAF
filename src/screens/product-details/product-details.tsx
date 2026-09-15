import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { styles } from "./styles";

export const ProductDetails = () => {
  const detailsProduct = useSelector(
    (state: RootState) => state.detailsProduct,
  );

  const router = useRouter();
  const product = detailsProduct.details;

  const oldPrice = product
    ? product.price / (1 - product.discountPercentage / 100)
    : 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Feather name="arrow-left" size={40} color="black" />
      </TouchableOpacity>

      <View>
        <Image
          source={{ uri: detailsProduct.details?.thumbnail }}
          style={styles.productImage}
        />
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.productName}>{detailsProduct.details?.title}</Text>

        <View style={styles.containerPrice}>
          <Text style={styles.productPrice}>
            R$ {detailsProduct.details?.price.toFixed(2).replace(".", ",")}
          </Text>

          {detailsProduct.details &&
            detailsProduct.details.discountPercentage >= 10 && (
              <Text style={styles.productOldPrice}>
                R$ {oldPrice.toFixed(2).replace(".", ",")}
              </Text>
            )}
        </View>

        <Text style={styles.productDescription}>
          {detailsProduct.details?.description}
        </Text>
      </View>
    </View>
  );
};
