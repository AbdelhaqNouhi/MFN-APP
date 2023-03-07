import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar, Text, Image } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import SearchBar from '../../components/SearchBar';
import GetLocation from 'react-native-get-location';
import { API_KEY } from '@env';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(API_KEY);

const Home = () => {

    const [coordinate, setCoordinates] = useState([32.309879, -9.232620]);
    const [currentCoordinate, setCurrentCoordinates] = useState([32.309879, -9.232620]);
    const [zoomLevel, setZoomLevel] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [styleURL, setStyleURL] = useState(MapboxGL.StyleURL.SatelliteStreet);


    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 1);
    };

    const handleZoomOut = () => {
        setZoomLevel(zoomLevel - 1);
    };

    const handleGetLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setCurrentCoordinates([location.longitude, location.latitude]);
                setCoordinates([location.longitude, location.latitude]);
                setZoomLevel(12);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    };

    useEffect(() => {
        handleGetLocation();
    }, []);

    //give me array of coordinates from america
    const coordinates = [
        [-9.23654, 32.28890],
        [-9.22688, 32.28894],
        [-9.22562, 32.28784],
        [-9.22150, 32.28853],
        [-9.23362, 32.29492],
        [-9.23357, 32.29395],
        [-9.23743, 32.29431],
        [-9.23523, 32.29234],
        [-9.23862, 32.29526],
        [-9.23814, 32.29529],
        [-9.23702, 32.29386],
        [-9.23793, 32.29515],
        [-9.23726, 32.29427],
        [-9.23544, 32.29317],
        [-9.23551, 32.29462],
        [-9.23151, 32.29424],
        [-9.23117, 32.29333],
        [-9.22640, 32.29373],
        [-9.22607, 32.29366],
        [-9.22632, 32.29327],
        [-9.22289, 32.29300],
        [-9.22118, 32.29395],
        [-9.22189, 32.29421],
        [-9.22116, 32.29390],
        [-9.23258, 32.29144],
        [-9.22993, 32.29298],
        [-9.23208, 32.29216],
        [-9.22623, 32.29470],
    ];

    const handleMapPress = (event) => {
        const latitude = event.geometry.coordinates[1];
        const longitude = event.geometry.coordinates[0];
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    };

    return (
        <View style={styles.page}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map} styleURL={styleURL} onPress={handleMapPress}>
                    <MapboxGL.Camera
                        zoomLevel={zoomLevel}
                        centerCoordinate={currentCoordinate}
                    />
                    {/* <MapboxGL.UserLocation
                        renderMode='normal'
                        visible={true}
                        showsUserHeadingIndicator={true}
                        showsUserLocation={true}
                        animated={true}

                    /> */}

                    {coordinates.map((item, index) => {
                        return (
                            <MapboxGL.MarkerView
                                coordinate={item}
                                anchor={{ x: 0.5, y: 1 }}
                                id="marker"
                            >
                                {/* <View>
                                    <Image source={require('../../assets/icons/location.png')} style={{ width: 20, height: 27, borderRadius: 5, resizeMode: 'stretch' }} />
                                </View> */}
                            </MapboxGL.MarkerView>
                        );
                    })
                    }
                </MapboxGL.MapView>
                <TouchableOpacity
                    style={styles.LocationButton}
                    onPress={handleGetLocation}
                >
                    <Image
                        style={styles.LocationIcon}
                        source={require('../../assets/icons/location.png')}
                    />
                </TouchableOpacity>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleZoomIn}>
                        <Image
                            style={styles.buttonIcon}
                            source={require('../../assets/icons/plus.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleZoomOut}>
                        <Image
                            style={styles.buttonIcon}
                            source={require('../../assets/icons/minus.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    LocationButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        position: 'absolute',
        bottom: 130,
        right: 14,
        elevation: 5,
    },
    LocationIcon: {
        width: 30,
        height: 30,
    },
    buttonIcon: {
        width: 20,
        height: 20,
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'column',
        gap: 15,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginLeft: 10,
        elevation: 5,
    },
});

export default Home;