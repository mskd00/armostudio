"use client"

import { createTheme, DirectionProvider, MantineProvider } from '@mantine/core'
import React, { ReactNode } from 'react'
import "./globals.css";

import '@mantine/core/styles.css';
import Header from '@/app/components/theme/Header';
import Footer from '@/app/components/theme/Footer';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

export default function Providers({ children, font }: { children: ReactNode, font: NextFontWithVariable }) {

    const theme = createTheme({
        colors: {
            primary: [
                "#fffae1",
                "#fff4cb",
                "#ffe89a",
                "#ffdb64",
                "#ffd038",
                "#ffca1c",
                "#ffc400",
                "#e3ae00",
                "#ca9b00",
                "#af8500"
            ]
        },
        primaryColor: "primary",
        fontFamily: font.style
    })

    return (
        <DirectionProvider>

            <MantineProvider theme={theme}>
                <Header />
                {children}
                <Footer />
            </MantineProvider>
        </DirectionProvider>
    )
}
