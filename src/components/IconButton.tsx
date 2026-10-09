import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  onPress: () => void;
  accessibilityLabel: string;
  children: React.ReactNode;
};

/** 44x44 square tap target — explicit width AND height, never intrinsic. */
export default function IconButton({
  onPress,
  accessibilityLabel,
  children,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={({pressed}) => [styles.btn, pressed ? styles.pressed : null]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(185,119,43,0.10)',
    borderWidth: 1,
    borderColor: THEME.colors.hairline,
  },
  pressed: {
    backgroundColor: 'rgba(185,119,43,0.22)',
  },
});
