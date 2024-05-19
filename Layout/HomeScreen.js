import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export const URL = 'http://192.168.1.8:3000'

// Home ip: 192.168.1.8
// 192.168.1.14 

const HomeScreen = ({ navigation }) => {

    const [ListPlant, setListPlant] = useState([]);
    const [ListPlanta, setListPlanta] = useState([]);

    const getListPlant = async () => {
        await fetch(`${URL}/plants`)
            .then(res => res.json())
            .then(data => {
                setListPlant(data)
            })
            .catch(err => console.log(err))
    }

    const getListPlanta = async () => {
        await fetch(`${URL}/plantas`)
            .then(res => res.json())
            .then(data => {
                setListPlanta(data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getListPlant();
        getListPlanta();
    }, [])


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
            
                <View style={{ width: '100%', height: 320 }}>
                    <View style={{}}>
                        <Text style={{color: "#F79515",fontSize: 23, marginTop: 20, fontWeight: "900", marginBottom: 20}}>
                            Mùa hè năng động với FOOTWEAR
                        </Text>
                    </View>
                    <Image
                        style={{ width: '100%', height: 230, justifyContent: 'center' }}
                        source={require('../Image/banner_1.jpg')}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("PlantSceen", { data: ListPlant })}
                        style={styles.newSP}>
                        <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', marginRight: 10 ,textDecorationLine: 'underline' }}>Xem hàng mới về </Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 30, marginLeft: 10 }}>Giày Nike</Text>

                <FlatList
                    numColumns={2}
                    scrollEnabled={false}
                    data={ListPlant.filter((item, index) => index < 4)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("DetailProduct", { item: item })}
                            style={styles.itemPlant}>
                            <Image source={{ uri: item.img }}
                                style={styles.itemImage} />
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemStyle}>{item.type}</Text>
                            <Text style={styles.price}>{item.price} đ</Text>
                        </TouchableOpacity >} >
                </FlatList>
                <TouchableOpacity onPress={() => navigation.navigate("PlantSceen", { data: ListPlant })}
                    style={styles.Xemthem}>
                    <View />
                    <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', textDecorationLine: 'underline' }}>Xem thêm cây khác </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>Giày ADIDAS</Text>

                <FlatList
                    numColumns={2}
                    extraData={4}
                    scrollEnabled={false}
                    data={ListPlanta.filter((item, index) => index < 4)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("DetailProduct", { item: item })}
                            style={styles.itemPlant}>
                            <Image source={{ uri: item.img }}
                                style={styles.itemImage} />
                            <Text>{item.name}</Text>
                            <Text style={styles.itemStyle}>{item.type}</Text>
                            <Text style={styles.price}>{item.price} đ</Text>
                        </TouchableOpacity>} >
                </FlatList>

                <TouchableOpacity onPress={()=> navigation.navigate('PlantaSceen', {data : ListPlanta})}
                 style={styles.Xemthem}>
                    <View />
                    <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', textDecorationLine: 'underline' }}>Xem thêm chậu khác </Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.cart} onPress={()=> navigation.navigate('CartScreen')}>
                <Image source={require('../Image/cart.png')} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    container: {
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 12
    },
    image: {
        width: 180,
        height: 150,
        borderRadius: 10
    },
    itemPlant: {
        backgroundColor: 'white',
        width: '45%',
        borderRadius: 12,
        padding: 12,
        margin: 10,
        gap: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowRadius: 5,
        shadowOpacity: 0.35,
        elevation: 10
    },
    itemImage: {
        width: '100%',
        height: 130,
        borderRadius: 12,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemStyle: {
        fontSize: 13,
        fontWeight: '300',
    },
    Xemthem: {
        width: '100%',
        padding: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    price: {
        fontSize: 17,
        fontWeight: '600',
        color: 'red'
    },
    cart: {
        width: 40, height: 40, 
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 12, 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'absolute',
        right: 40,
        bottom: 30,
    },
    newSP: {
        bottom: 0,
        marginLeft: 10
    }

})