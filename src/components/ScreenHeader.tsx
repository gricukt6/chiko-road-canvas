import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HEADER_TOP_PAD, THEME} from '../constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  transparent?: boolean;
};

/** One header for every screen, so badges and spacing never drift apart. */
export default function ScreenHeader({
  title,
  subtitle,
  left,
  right,
  transparent = false,
}: Props) {
  return (
    <View
      style={[styles.header, transparent ? styles.ghost : styles.solid]}>
      <View style={styles.side}>{left}</View>
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <View style={[styles.side, styles.sideRight]}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: HEADER_TOP_PAD,
    paddingBottom: 12,
    paddingHorizontal: 16,
    minHeight: 116,
    flexDirection: 'row',
    alignItems: 'center',
  },
  solid: {
    backgroundColor: THEME.colors.headerBg,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.hairline,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  side: {
    width: 76,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideRight: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: THEME.colors.textPrimary,
  },
  subtitle: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: THEME.colors.textSecondary,
  },
});
