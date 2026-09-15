import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  discountPercentage: number;
  onPress: () => void;
}

export const ProductCard = ({
  image,
  name,
  description,
  price,
  discountPercentage,
  onPress,
}: ProductCardProps) => {
  const oldPrice =
    Number(price.replace("R$ ", "")) / (1 - discountPercentage / 100);

  return (
    <TouchableOpacity style={styles.containerProduct} onPress={onPress}>
      <View style={styles.containerImage}>
        <Image source={{ uri: image }} style={styles.productImage} />
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {name}
        </Text>

        <Text style={styles.productDescription} numberOfLines={3}>
          {description}
        </Text>

        <View style={styles.containerPrice}>
          <Text style={styles.productPrice}>
            R$ {Number(price.replace("R$ ", "")).toFixed(2).replace(".", ",")}
          </Text>

          {discountPercentage >= 10 && (
            <Text style={styles.productOldPrice}>
              R$ {oldPrice.toFixed(2).replace(".", ",")}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
