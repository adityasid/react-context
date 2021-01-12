import React, { useContext } from 'react';

import { ThemeContext } from "./App";

export default function GrandChildComponent() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <div style={{ marginTop: "2rem" }}>
                <div>The theme is {theme}</div>
                <button onClick={() => setTheme('light')} style={{ marginTop: "1rem" }}>
                    Change To Light Theme
                </button>
            </div>
        </>
    )
}
