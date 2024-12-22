import React, { useState } from 'react';
import { View, Text, FlatList, Button, ImageBackground, StyleSheet, TextInput } from 'react-native';

export default function Index() {
    const [images, setImages] = useState([
        { id: 1, src: 'https://i.pinimg.com/474x/16/dc/e4/16dce4c8bc16b1a037bdfd3b378b9ebc.jpg', name: 'Image 1' },
        { id: 2, src: 'https://i.pinimg.com/736x/26/ae/09/26ae09d887c831f890eb86299c9fe673.jpg', name: 'Image 2' },
        { id: 3, src: 'https://i.pinimg.com/474x/1e/37/7b/1e377bb38cc9e0201695ece9c6965c45.jpg', name: 'Image 3' },
        { id: 4, src: 'https://i.pinimg.com/474x/c7/3b/54/c73b54ec342acc62ffe635a95e8bfd0d.jpg', name: 'Image 4' },
    ]);
    const [newImage, setNewImage] = useState('');

    const addImage = () => {
        if (!newImage) return;

        const newId = images.length + 1;
        setImages([...images, { id: newId, src: newImage, name: `Image ${newId}` }]);
        setNewImage('');
    };

    const removeImage = (id) => {
        setImages(images.filter(image => image.id !== id));
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={newImage}
                onChangeText={setNewImage}
                placeholder="image URL"
                style={styles.input}
            />
            <Button title="Add Image" onPress={addImage} />

            <FlatList
                data={images}
                style={{marginTop: 10}}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <ImageBackground source={{ uri: item.src }} style={styles.imageCard} imageStyle={styles.imageCardImage}>
                            <Text style={styles.imageName}>{item.name}</Text>
                        </ImageBackground>
                        <Button title="Delete" onPress={() => removeImage(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
    imageCard: {
        width: 300,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    imageCardImage: {
        borderRadius: 10,
    },
    imageName: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
});
