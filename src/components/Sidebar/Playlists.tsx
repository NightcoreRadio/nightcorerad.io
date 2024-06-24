import {component$, Resource, useResource$} from "@builder.io/qwik";
import {LibraryIcon, PlayIcon, PlusCircle} from "~/icons";

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Playlist = component$(({children, image_url, image_alt, name, ...props}) => {
    return (
        <div class="group ml-[10px] h-[30px] flex gap-[8px] items-center text-nowrap cursor-pointer">
            <img src={image_url} style="width: 30px; height: auto;" class="rounded-md" alt={image_alt}/>
            <div class="min-w-[30px] h-[30px] flex items-center justify-center ml-[-38px]">
                <PlayIcon
                    size={1.5}
                    class="text-default-hover-color transition-all duration-300 opacity-0 group-hover:opacity-100"/>
            </div>
            <div class="flex h-full overflow-hidden items-center justify-center">
                <h2 class="overflow-hidden whitespace-nowrap text-ellipsis group-hover:text-default-hover-color leading-loose">{name}</h2>
            </div>
        </div>
    );
});


const customScrollbarStyles = `
    /* For webkit browsers (Chrome, Safari, etc.) */
    ::-webkit-scrollbar {
        width: 8px; 
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #1F1F1F;
        border-radius: 4px;
        margin-left: -8px;
    }
`;

export default component$(() => {
    const albums = useResource$(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        return response.json();
    });

    const images = useResource$(async () => {
        const response = await fetch("https://picsum.photos/30");
        return response.json();
    });

    console.log("images:", images);

    return (
        <div class="flex flex-col gap-[8px] bg-default-bg rounded-lg p-[8px] overflow-hidden">
            <div class="flex items-center h-[30px] px-[16px] opacity-80">
                <h4 class="flex items-center gap-[8px] font-bold cursor-pointer hover:text-default-hover-color">
                    <LibraryIcon size={1.5} />
                    Playlists
                </h4>
                <PlusCircle size={1.5} class="ml-auto cursor-pointer hover:text-default-hover-color opacity-50" />
            </div>
            <div class="flex flex-col h-[calc(100%-30px)] gap-[8px] overflow-x-hidden overflow-scroll-y">
                <style>{customScrollbarStyles}</style>
                <Resource value={albums} onResolved={albums =>
                    albums.map((album: any) => {
                        // Check if images is an array before using filter
                        const albumImages = Array.isArray(images) ? images.filter((img: any) => img.albumId === album.id) : [];
                        // Use the first image found or a placeholder if no image is available
                        const imageUrl = albumImages.length > 0 ? albumImages[0].url : `https://picsum.photos/seed/${album.id}/30`;

                        // @ts-ignore
                        return (<Playlist key={album.id} image_url={imageUrl} image_alt={album.title} name={album.title} />);
                    })
                }/>
            </div>
        </div>
    );
});