import React from 'react';

export default function Index() {
    return (
        <div>
            <h2>Texto Default teste</h2>
        </div>
    )
}

export function Texto1() {
    return (
        <div>
            <h2>Texto 1</h2>
        </div>
    )
}

export function Texto2() {
    return (
        <div>
            <h2>Texto 2</h2>
        </div>
    )
}

export function Texto3({ children, cor, tipo }) {
    return (
        <div>
            <h2>
                <span style={{ color: cor, fontWeight: tipo }}>
                    {children}
                </span>
            </h2>
        </div>
    )
}