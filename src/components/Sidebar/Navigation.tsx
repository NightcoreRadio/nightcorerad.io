import { component$ } from "@builder.io/qwik";
import {HomeIcon, MagnifyingGlass, UserIcon} from "~/icons";

// @ts-ignore
const NavLink = ({children, href, currentPageURL = "#", ...props}) => {

    const currentPageChangeColor = () => { if (currentPageURL === "/") return {color: 'theme("accent")'}; else return {} };
    return (
        <a href={href} class={`${props.class} ${(currentPageURL === href ? "text-accent" : "")} flex rounded-md 
        items-center gap-[8px] text-[1.6rem] transition-all duration-300 hover:text-default-hover-color`}
        style={{...currentPageChangeColor()}}
        >{children}</a>
    );
}

export default component$(() => {
   return (
       <nav class="flex flex-col gap-[8px] min-h-[180px] bg-default-bg rounded-lg p-[12px]">
           <NavLink class="group" href="/" currentPageURL={typeof window !== 'undefined' ? window.location.pathname : '/'}>
               <HomeIcon size={3} class="transition-transform duration-300 group-hover:translate-x-2"/>
               <span class="transition-transform duration-500 group-hover:translate-x-2">Home</span>
           </NavLink>
           <NavLink class="group" href="discover" currentPageURL={typeof window !== 'undefined' ? window.location.pathname : '/'}>
               <MagnifyingGlass size={2.5} class="transition-transform duration-300 group-hover:translate-x-2"/>
               <span class="transition-transform duration-500 group-hover:translate-x-2">Discover</span>
           </NavLink>
           <NavLink class="group" href="account" currentPageURL={typeof window !== 'undefined' ? window.location.pathname : '/'}>
               <UserIcon size={3} class="transition-transform duration-300 group-hover:translate-x-2"/>
               <span class="transition-transform duration-500 group-hover:translate-x-2">Account</span>
           </NavLink>
       </nav>
   );
});