import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {PRESS_SPRING} from '../constants/config';
import {THEME} from '../constants/theme';

type IconRenderer = (size: number, color: string) => React.ReactNode;

type Props = {
  label: string;
  onPress: () => void;
  accent?: string;
  renderIcon?: IconRenderer;
  disabled?: boolean;
  full?: boolean;
};

const ICON = 24;
const H = 48;

/** Same press contract as PrimaryButton: Pressable outside, Animated inside. */
export default function SecondaryButton({
  label,
  onPress,
  accent = THEME.colors.woodEdge,
  renderIcon,
  disabled = false,
  full = false,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const press = (to: number) =>
    Animated.spring(scale, {
      toValue: to,
      tension: PRESS_SPRING.tension,
      friction: PRESS_SPRING.friction,
      useNativeDriver: true,
    }).start();

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={[styles.press, full ? styles.full : styles.flexed]}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      onPressIn={() => press(0.97)}
      onPressOut={() => press(1)}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.anim,
          {
            transform: [{scale}],
            backgroundColor: accent + '1A',
            borderColor: accent + '48',
            opacity: disabled ? 0.45 : 1,
          },
        ]}>
        <View style={styles.row}>
          {renderIcon ? renderIcon(ICON, accent) : null}
          <Text style={[styles.label, {color: accent}]} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: H,
  },
  flexed: {
    flex: 1,
  },
  full: {
    width: '100%',
  },
  anim: {
    width: '100%',
    height: H,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 13,
    lineHeight: ICON,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
});
