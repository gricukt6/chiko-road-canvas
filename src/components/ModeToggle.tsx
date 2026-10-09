import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Paintbrush, X} from 'lucide-react-native';
import {THEME} from '../constants/theme';

export type PaintMode = 'paint' | 'mark';

type Props = {
  mode: PaintMode;
  onChange: (m: PaintMode) => void;
};

const ICON = 20;

/** Two-segment pill. Each half is its own full-height tap target. */
export default function ModeToggle({mode, onChange}: Props) {
  const paintOn = mode === 'paint';
  return (
    <View style={styles.track}>
      <Pressable
        accessibilityRole="button"
        style={styles.seg}
        hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
        onPress={() => onChange('paint')}>
        {paintOn ? (
          <LinearGradient
            colors={THEME.gradients.cta}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.fill}
          />
        ) : null}
        <View style={styles.row}>
          <Paintbrush
            size={ICON}
            color={paintOn ? THEME.colors.textPrimary : THEME.colors.textSecondary}
            strokeWidth={2.4}
          />
          <Text
            style={[
              styles.label,
              {
                color: paintOn
                  ? THEME.colors.textPrimary
                  : THEME.colors.textSecondary,
              },
            ]}>
            PAINT
          </Text>
        </View>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        style={styles.seg}
        hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
        onPress={() => onChange('mark')}>
        {paintOn ? null : <View style={[styles.fill, styles.markFill]} />}
        <View style={styles.row}>
          <X
            size={ICON}
            color={paintOn ? THEME.colors.textSecondary : THEME.colors.textPrimary}
            strokeWidth={2.4}
          />
          <Text
            style={[
              styles.label,
              {
                color: paintOn
                  ? THEME.colors.textSecondary
                  : THEME.colors.textPrimary,
              },
            ]}>
            MARK
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    backgroundColor: 'rgba(185,119,43,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(185,119,43,0.26)',
    overflow: 'hidden',
  },
  seg: {
    flex: 1,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 23,
  },
  markFill: {
    backgroundColor: 'rgba(138,115,85,0.24)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    fontSize: 13,
    lineHeight: ICON,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
});
