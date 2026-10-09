import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PRESS_SPRING} from '../constants/config';
import {THEME} from '../constants/theme';

type IconRenderer = (size: number, color: string) => React.ReactNode;

type Props = {
  label: string;
  onPress: () => void;
  renderIcon?: IconRenderer;
  colors?: string[];
  textColor?: string;
};

const ICON = 24;
const H = 60;

/**
 * Pressable is the PARENT and the animated layer sits inside it. A
 * native-driven Animated.View wrapping a Pressable swallows taps on Android
 * release — the dead-button bug.
 */
export default function PrimaryButton({
  label,
  onPress,
  renderIcon,
  colors,
  textColor = THEME.colors.textPrimary,
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
      style={styles.press}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      onPressIn={() => press(0.96)}
      onPressOut={() => press(1)}
      onPress={onPress}>
      <Animated.View style={[styles.anim, {transform: [{scale}]}]}>
        <LinearGradient
          colors={colors && colors.length >= 2 ? colors : THEME.gradients.cta}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.grad}>
          <View style={styles.row}>
            {renderIcon ? renderIcon(ICON, textColor) : null}
            <Text style={[styles.label, {color: textColor}]} numberOfLines={1}>
              {label}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    height: H,
  },
  anim: {
    width: '100%',
    height: H,
    borderRadius: 18,
    shadowColor: '#D2761F',
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
    elevation: 10,
  },
  grad: {
    width: '100%',
    height: H,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
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
    fontSize: 20,
    lineHeight: ICON,
    fontWeight: '900',
    letterSpacing: 3,
  },
});
