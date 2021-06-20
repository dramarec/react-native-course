import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { THEME } from '../theme'
import { AppTextBold } from './ui/AppTextBold'

export const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <AppTextBold
                style={{
                    ...styles.navbar,
                    ...Platform.select({
                        ios: styles.navbarIOS,
                        android: styles.navbarAndroid
                    })
                }}

            >
            </AppTextBold>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIOS: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        // color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        ...Platform.select({
            ios: {
                color: THEME.MAIN_COLOR,
                marginTop: 30

            },
            android: {
                color: THEME.MAIN_COLOR
            }
        }),
        fontSize: 20
    }
})
