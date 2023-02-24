import React from 'react';

export default function NavigationBar({ active }) {
    return (
        <div id="navbar">
            <a href={replaceActive('/', active)}>willkommen.</a>
            <a href={replaceActive('/rezepte', active)}>rezepte.</a>
            <a href={replaceActive('/geschichten', active)}>geschichten.</a>
            <a href={replaceActive('/nicole_jette', active)}>nicole & jette.</a>
            <a href={replaceActive('/loeffelfreunde', active)}>
                löffelfreu(n)de.
            </a>
            <a href={replaceActive('/leseglueck', active)}>leseglück.</a>
        </div>
    );
}

function replaceActive(href: string, active: string) {
    if (href === active) return '#';
    return href;
}
