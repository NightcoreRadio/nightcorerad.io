import {$, component$, useSignal} from "@builder.io/qwik";
import { VolumeHigh } from "~/icons";

export default component$(() => {

    const songBarSize = useSignal(12);
    const volumeBarSize = useSignal(100);
    const isMouseDownOnSongBar = useSignal(false);
    const isMouseDownOnVolumeBar = useSignal(false);

    return (
        <div class="flex h-[20px] gap-[12px] w-full rounded-lg">
            <div class="w-full h-full bg-default-bg rounded-lg cursor-ew-resize"
                 onMouseDown$={(event: MouseEvent) => {
                     isMouseDownOnSongBar.value = true;
                     // @ts-ignore
                     const bounds: any = event.target.getBoundingClientRect();
                     const x: number = event.clientX - bounds.left;
                     const max: number = Math.floor(bounds.width);
                     songBarSize.value = (x / max) * 100;
                 }}
                 onMouseOut$={() => isMouseDownOnSongBar.value = false}
                 onMouseUp$={() => isMouseDownOnSongBar.value = false}
                 onMouseMove$={(event: MouseEvent) => {
                     if (isMouseDownOnSongBar.value) {
                         // @ts-ignore
                         const bounds: any = event.target.getBoundingClientRect();
                         const x: number = event.clientX - bounds.left;
                         const max: number = Math.floor(bounds.width);
                         songBarSize.value = (x / max) * 100;
                     }
                 }}>
                <div class="w-full h-full rounded-lg overflow-hidden">
                    <div class="w-full h-full bg-accent rounded-[10px] origin-left select-none pointer-events-none"
                         onDrag$={(e) => e.preventDefault()}
                         style={{ transform: `scaleX(${songBarSize.value}%)`
                    }} />
                    <div class="mt-[-20px] h-[20px] w-full flex items-center justify-center text-default-color
                    text-[.8rem] opacity-50 select-none pointer-events-none"
                         onDrag$={(e) => e.preventDefault()}>
                        {`00:${Math.floor(songBarSize.value)}`}
                    </div>
                </div>
            </div>
            <div class="w-[200px] h-full bg-default-bg rounded-lg">
                <div class="w-full h-full rounded-lg cursor-ew-resize"
                     onMouseDown$={(event: MouseEvent) => {
                         isMouseDownOnVolumeBar.value = true;
                         // @ts-ignore
                         const bounds: any = event.target.getBoundingClientRect();
                         const x: number = event.clientX - bounds.left;
                         const max: number = Math.floor(bounds.width);
                         volumeBarSize.value = (x / max) * 100;
                     }}
                     onMouseOut$={() => isMouseDownOnVolumeBar.value = false}
                     onMouseUp$={() => isMouseDownOnVolumeBar.value = false}
                    onMouseMove$={(event: MouseEvent) => {
                    if (isMouseDownOnVolumeBar.value) {
                        // @ts-ignore
                        const bounds: any = event.target.getBoundingClientRect();
                        const x: number = event.clientX - bounds.left;
                        const max: number = Math.floor(bounds.width);
                        volumeBarSize.value = (x / max) * 100;
                    }
                }}>
                    <div class="h-full bg-accent rounded-lg select-none origin-left pointer-events-none" style={{transform: `scaleX(${volumeBarSize.value}%)`}}></div>
                    <div class="mt-[-20px] h-[20px] w-full flex items-center justify-center text-default-color
                    text-[.8rem] opacity-50 select-none pointer-events-none">
                        <VolumeHigh size={1} />
                    </div>
                </div>
            </div>
        </div>
    );
});
