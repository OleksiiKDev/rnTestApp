import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, MapView } from '@maplibre/maplibre-react-native';
import { colors, radius, shadow, spacing } from '@/theme';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Camera zoomLevel={1.2} centerCoordinate={[0, 20]} />
      </MapView>

      <View style={styles.overlay}>
        <Text style={styles.overlayTitle}>Map</Text>
        <Text style={styles.overlayText}>
          Use this view to build a cleaner location experience around permission-aware user tracking.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  map: {
    flex: 1,
  },
  overlay: {
    backgroundColor: colors.mapOverlay,
    borderRadius: radius.lg,
    left: spacing.lg,
    padding: spacing.lg,
    position: 'absolute',
    right: spacing.lg,
    top: 70,
    ...shadow,
  },
  overlayTitle: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  overlayText: {
    color: '#EAF1FF',
    fontSize: 14,
    lineHeight: 21,
  },
});

export default MapScreen;
