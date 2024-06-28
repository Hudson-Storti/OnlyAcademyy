import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { supabase } from './supabase'; 

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (!cameraRef.current) return;
  
    try {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo URI:', photo.uri);
  
      
      let photos = await AsyncStorage.getItem('photos');
      photos = photos ? JSON.parse(photos) : [];
  
      
      if (Array.isArray(photos)) {
        photos.push(photo.uri);
      } else {
        photos = photo.uri ? [photo.uri] : [];


      }
  
      
      await AsyncStorage.setItem('photos', JSON.stringify(photos));
  
      console.log('Photo saved in AsyncStorage');
       
       const ext = photo.uri.substring(photo.uri.lastIndexOf('.') + 1);

       
       const fileName = photo.uri.replace(/^.*[\\\/]/, '');

      
      const { data, error } = await supabase.storage
        .from('image-bucket')
        .upload(fileName, {
          uri: photo.uri,
          type: `image/${ext}`,
          name: fileName
        });

      if (error) throw new Error(error.message);

      console.log('Photo uploaded to Supabase:', data);
    } catch (error) {
      console.error('Erro ao tirar foto:', error);
    }
  };
  
  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        type={'back'}
        ref={cameraRef}
        onCameraReady={handleCameraReady}
      >
        {isCameraReady && (
          <View style={styles.cameraControls}>
            <TouchableOpacity style={styles.takePictureButton} onPress={takePicture}>
              <Ionicons name="camera" size={32} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraControls: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  takePictureButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 20,
  },
});