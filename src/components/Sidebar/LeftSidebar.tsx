import {component$} from "@builder.io/qwik";
import Navigation from "~/components/Sidebar/Navigation";
import Playlists from "~/components/Sidebar/Playlists";
import {ChevronLeft, ChevronRight, PlayIcon} from "~/icons";
import PlayerControls from "~/components/Player/PlayerControls";

export default component$(() => {
    return (
        <aside class="flex flex-col gap-[8px] h-full min-w-[200px] max-w-[300px] w-2/12">
            <Navigation />
            <Playlists />
            <PlayerControls />
        </aside>
    );
})