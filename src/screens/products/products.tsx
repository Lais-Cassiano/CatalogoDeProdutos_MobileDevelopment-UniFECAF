import { ProductCard } from "@/src/components/product-card/product-card";
import { logout } from "@/src/store/slices/auth-slice";
import {
  clearDetailsProduct,
  setDetailsProduct,
} from "@/src/store/slices/product-details-slice";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  discountPercentage: number;
  category: string;
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedTab, setSelectedTab] = useState("masculinos");
  const dispatch = useDispatch();
  const router = useRouter();

  const flatListRef = useRef<FlatList>(null);

  const goToTop = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedTab === "masculinos") {
      return product.category.startsWith("mens-");
    }

    return product.category.startsWith("womens-");
  });

  const getApi = async () => {
    const resp = await axios.get("https://dummyjson.com/products?limit=0");

    setProducts(resp.data.products);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerTabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("masculinos")}
        >
          <Text style={styles.tabsText}>Produtos Masculinos</Text>

          {selectedTab === "masculinos" && <View style={styles.activeTab} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("femininos")}
        >
          <Text style={styles.tabsText}>Produtos Femininos</Text>

          {selectedTab === "femininos" && <View style={styles.activeTab} />}
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        key="two-columns"
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ProductCard
            name={item.title}
            price={`R$ ${item.price}`}
            description={item.description}
            image={item.thumbnail}
            discountPercentage={item.discountPercentage}
            onPress={() => {
              dispatch(setDetailsProduct(item));
              router.push("/product-details");
            }}
          />
        )}
      />

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          dispatch(logout());
          dispatch(clearDetailsProduct());
        }}
      >
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>

      <View style={styles.containerTabsBottom}>
        <TouchableOpacity style={styles.tabBottom} onPress={goToTop}>
          <FontAwesome name="home" size={24} color="#2567e8" />
          <Text style={[styles.tabBottomText, { color: "#2567e8" }]}>
            Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBottom}>
          <FontAwesome name="gear" size={24} color="#555555" />
          <Text style={styles.tabBottomText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
