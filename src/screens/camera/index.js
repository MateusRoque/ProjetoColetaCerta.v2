/*
import { CameraView, takePictureAsync, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Modal, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system'

export default function CamApp() {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Modal state

  const [facing, setFacing] = useState('back');

  const savePhoto = async () => {
    if (photoUri) {
      const { status } = await FileSystem.requestStoragePermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need storage permission to save photos.');
        return;
      }
  
      const filename = `${Date.now()}.jpg`;
      const directory = FileSystem.Directory.Pictures; // Choose desired directory
      const uri = await FileSystem.moveAsync({
        //from: photoUri,
        //to: `<span class="math-inline">\{directory\}/</span>{filename}`,
      });
      console.log('Saved photo:', uri); // Handle saved photo URI
      setModalVisible(false); // Hide modal after saving
      setPhotoUri(null); // Clear preview image after saving
    }}
  

  if (hasPermission === null) {
    // Requesting permissions
    return <View />;
  }

  if (!hasPermission.granted) {
    // Permission not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to use the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5 }; // Adjust image quality as needed
      const data = await cameraRef.takePictureAsync(options);
      setPhotoUri(data.uri);
      setModalVisible(true); // Show modal after taking picture
    }
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.previewImage} />
      )}
      <CameraView style={styles.camera} facing={facing} ref={setCameraRef}>
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}><Ionicons name="camera" size={50} color="blue" /></Text>
          </TouchableOpacity>
          {}
          <TouchableOpacity style={styles.saveButton} onPress={savePhoto} disabled={!photoUri}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={hideModal}>
            <View style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </View>
          </TouchableOpacity>
          <Image source={{ uri: photoUri }} style={styles.modalImage} />
        </View>
      </Modal>
    </View>
  );
}*/

import {
  CameraView,
  takePictureAsync,
  useCameraPermissions,
} from "expo-camera";
import { useState } from "react";
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as FileSystem from "expo-file-system";

export default function CamApp() {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [facing, setFacing] = useState("back");

  if (hasPermission === null) {
    // Requesting permissions
    return <View />;
  }

  if (!hasPermission.granted) {
    // Permission not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5 }; // Adjust image quality as needed
      const data = await cameraRef.takePictureAsync(options);
      setPhotoUri(data.uri);
      setModalVisible(true); // Show modal after taking picture
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const savePhoto = async () => {
    if (photoUri) {
      const { status } = await FileSystem.requestStoragePermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need storage permission to save photos.");
        return;
      }

      const filename = `${Date.now()}.jpg`;
      const directory = FileSystem.Directory.Pictures; // Choose desired directory
      const uri = await FileSystem.moveAsync({
        from: photoUri,
        to: `<span class="math-inline">\{directory\}/</span>{filename}`,
      });
      console.log("Saved photo:", uri); // Handle saved photo URI
      setModalVisible(false); // Hide modal after saving
      setPhotoUri(null); // Clear preview image after saving
    }
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.previewImage} />
      )}
      <CameraView style={styles.camera} facing={facing} ref={setCameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>
              <Ionicons name="camera" size={50} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={savePhoto}
            disabled={!photoUri}
          >
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={hideModal}>
            <View style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </View>
          </TouchableOpacity>
          <Image source={{ uri: photoUri }} style={styles.modalImage} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between", // Distribute buttons evenly
    alignItems: "flex-end", // Position buttons at the bottom
    padding: 16,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  captureButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: 16,
    borderRadius: 50, // Rounded capture button
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  captureText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  previewImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    top: 10,
    right: 16,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalImage: {
    width: "90%",
    height: "60%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 28,
  },
  saveButton: {
    position: "absolute",
    bottom: 70,
    left: 180,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

/*

import * as FileSystem from 'expo-file-system';
 const [photoUri, setPhotoUri] = useState(null);
const savePhoto = async () => {
  if (photoUri) {
    const { status } = await FileSystem.requestStoragePermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need storage permission to save photos.');
      return;
    }

    const filename = `${Date.now()}.jpg`;
    const directory = FileSystem.Directory.Pictures; // Choose desired directory
    const uri = await FileSystem.moveAsync({
      from: photoUri,
      to: `<span class="math-inline">\{directory\}/</span>{filename}`,
    });
    console.log('Saved photo:', uri); // Handle saved photo URI
    setModalVisible(false); // Hide modal after saving
    setPhotoUri(null); // Clear preview image after saving
  }
};*/

/* </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={savePhoto} disabled={!photoUri}>
            <Text style={styles.saveText}>Save</Text>
    </TouchableOpacity>*/
