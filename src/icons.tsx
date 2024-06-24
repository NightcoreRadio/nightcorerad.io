

/**
 * A house icon from the HeroIcons section on [Icônes](https://icones.js.org/collection/heroicons?s=home).<br />
 * [HeroIcons](https://heroicons.com/) is a set of free MIT-licensed high-quality SVG icons for UI development. Source
 * code available on [GitHub](https://github.com/tailwindlabs/heroicons).
 * @licence MIT
 * @author [Tailwind Labs](https://github.com/tailwindlabs)
 * @param size The size of the icon (rem).
 * @param style JSX style object.
 * @param props
 * @return The Home icon.
 */
export function HomeIcon({size = 2, style = {}, ...props}) {
    return (<svg class={props.class} style={{fontSize: `${size}rem`, ...style}} xmlns="http://www.w3.org/2000/svg"
                 width="1em" height="1em" viewBox="0 0 20 20">
        <path fill="currentColor"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707z"></path>
    </svg>)
}

/**
 * A magnifying glass icon from the HeroIcons section on [Icônes](https://icones.js.org/collection/heroicons?s=home), used to indicate zooming or searching.<br />
 * [HeroIcons](https://heroicons.com/) is a set of free MIT-licensed high-quality SVG icons for UI development. Source
 * code available on [GitHub](https://github.com/tailwindlabs/heroicons).
 * @licence MIT
 * @author [Tailwind Labs](https://github.com/tailwindlabs)
 * @param size The size of the icon (rem).
 * @param flipped Controls horizontal mirroring of the icon. True means it will be flipped.
 * @param style JSX style object.
 * @param props
 * @return The Magnifying Glass icon.
 */
export function MagnifyingGlass({size = 2, padding = "4px", style = {marginRight: 4, marginLeft: 4}, ...props}) {
    return (<svg class={props.class} style={{fontSize: `${size}rem`, paddingLeft: padding, ...style}}
                 xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none">
            <path fill="currentColor" d="M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity=".16"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
        </g>
    </svg>)
}

/**
 * A user (person) icon from the HeroIcons section on [Icônes](https://icones.js.org/collection/heroicons?s=home), used to indicate a person, or an account.<br />
 * [HeroIcons](https://heroicons.com/) is a set of free MIT-licensed high-quality SVG icons for UI development. Source
 * code available on [GitHub](https://github.com/tailwindlabs/heroicons).
 * @licence MIT
 * @author [Tailwind Labs](https://github.com/tailwindlabs)
 * @param size The size of the icon (rem).
 * @param style JSX style object.
 * @param props
 * @return The User (Person) icon.
 */
export function UserIcon({size = 2, style = {}, ...props}) {
    return (<svg class={props.class} style={{fontSize: `${size}rem`, ...style}} xmlns="http://www.w3.org/2000/svg"
                 width="1em" height="1em" viewBox="0 0 16 16">
        <path fill="currentColor"
              d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m4.735 6c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139z"></path>
    </svg>)
}


export function PlayIcon({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}} width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"></path></svg>
    )
}

/**
 * A plus icon inside of a circle from the Phosphor section on [Icônes](https://icones.js.org/collection/ph), used to indicate the addition of something.<br />
 * [Phosphor](https://phosphoricons.com/) is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Source code available on [GitHub](https://github.com/phosphor-icons/homepage).
 * @licence MIT
 * @author [Helena Zhang & Tobias Fried](https://www.helenazhang.com/)
 * @param size The size of the icon (rem).
 * @param style JSX style object.
 * @param props
 * @return The Plus icon.
 */
export function PlusCircle({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}}
             width="1em" height="1em" viewBox="0 0 256 256" {...props}>
            <path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m52-84a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-24 0v-28H88a12 12 0 0 1 0-24h28V88a12 12 0 0 1 24 0v28h28a12 12 0 0 1 12 12"></path>
        </svg>
    )
}

/**
 * A library icon from the FluentUI section on [Icônes](https://icones.js.org/collection/fluent), used to indicate a library of some kind.<br />
 * [FluentUI](https://developer.microsoft.com/en-us/fluentui#/) represents a collection of utilities, React components, and web components for building web applications. Source code available on [GitHub](https://github.com/microsoft/fluentui).
 * @licence MIT
 * @author [Microsoft](https://www.microsoft.com/it-it/)
 * @param size The size of the icon (rem).
 * @param style JSX style object.
 * @param props
 * @return The Library icon.
 */
export function LibraryIcon({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}} width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M2.249 2C1.559 2 1 2.56 1 3.25v9.495c0 .69.56 1.25 1.249 1.25h.5c.69 0 1.249-.56 1.249-1.25V3.249c0-.69-.56-1.249-1.25-1.249zm3.997 0c-.69 0-1.25.56-1.25 1.25v9.495c0 .69.56 1.25 1.25 1.25h.5a1.25 1.25 0 0 0 1.248-1.25V3.249A1.25 1.25 0 0 0 6.745 2zm5.726 2.777a1.249 1.249 0 0 0-1.571-.713l-.582.204a1.25 1.25 0 0 0-.746 1.645l2.937 7.304c.249.62.94.933 1.571.713l.582-.204a1.25 1.25 0 0 0 .746-1.646z"></path></svg>
    )
}

export function EmptyPlayIcon({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}} width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8 19V5l11 7zm2-3.65L15.25 12L10 8.65z"></path></svg>
    )
}


export function ChevronLeft({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}} width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7z"></path></svg>
    )
}


export function ChevronRight({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}} width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7z"></path></svg>
    )
}


export function VolumeHigh({size = 2, style = {}, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={props.class} style={{fontSize: `${size}rem`, ...style}} width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M3 9h4l5-5v16l-5-5H3V9zm18 3a9.003 9.003 0 0 1-7 8.777V18.71a7.003 7.003 0 0 0 0-13.42V3.223c4.008.91 7 4.494 7 8.777zm-4 0a5.001 5.001 0 0 1-3 4.584V7.416c1.766.772 3 2.534 3 4.584z" fill="currentColor"></path></svg>
    )
}