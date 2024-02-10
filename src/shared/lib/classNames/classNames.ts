type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]: [string, boolean | string]) => className)
    ]
        .join(' ');
}

// classNames('btn', {hovered: true, selectable: true}, ['pdg'])
// ==>>
// className= 'btn hovered selectable pdg'